var express = require("express")
  , app = express()
  , fs = require('fs')
  , Busboy = require('busboy')
  , phantom = require('phantom')
  , crypto = require('crypto')
  , port = process.env.SERVER_PORT || 8080
;

function parseFormat (f) {
  switch (f) {
    case 'image/png':
      return 'png';
    case 'image/jpg':
    case 'image/jpeg':
      return 'jpg';
    default:
      return 'pdf';
  }
}

function parseSize (wxh) {
  var m = wxh ? wxh.match(/(\d+)x(\d+)/) : null
  if (m) {
    return { width: parseInt(m[1]), height: parseInt(m[2]) };
  } else {
    return null;
  }
}

function rasterize (opts) {
  console.log('RENDERING: ', opts);
  return new Promise(function (success, failure) {
    if (opts.url) {
      let format = parseFormat(opts.format)
      let size = parseSize(opts.size)
      console.log('size and format', size, format);
      let sha256 = crypto.createHash('sha256').update(opts.url).digest('hex');
      let _page = null;
      let _filename = sha256 + '.' + format;
    
      phantom.create().then(function (ph) {
        return ph.createPage();
      })
      .then(function (page) {
        _page = page;
        if (size) {
          _page.property('viewportSize', { width: size.width, height: size.height });
        }
        return _page.open(opts.url);
      })
      .then(function (status) {
        if (status === 'success') {
          return _page.render(_filename);
        } else {
          failure(new Error('Problems requesting ' + opts.url + '; status=' + status));
        }
      })
      .then(function () {
        if (fs.existsSync(_filename)) {
          let readstream = fs.createReadStream(_filename);

          readstream.on('close', function () {
            fs.unlink(_filename);
          })
          .on('error', function (err) {
            failure(err);
            fs.unlink(_filename);
          })

          success(readstream);
        } else {
          failure(new Error('Can not find output file ' + _filename));
        }
      })
      .catch(function (err) {
        failure(err);
      })
    } else {
      failure(new Error('No url provided.'));
    }
  });
}

app.use(express.static('web'));

app.get('/api/render', function(req, res) {
  rasterize(req.query).then(function (resp) {
    resp.pipe(res);
  })
  .catch(function (err) {
    res.status(500).send(err.toString());
  });
})

app.post('/api/render', function(req, res) {
  var busboy = new Busboy({ headers: req.headers });
  var formdata = {};

  busboy.on('error', function(err) {
    res.status(500).send(err);
  });

  busboy.on('field', function(fieldname, val, fieldnameTrunc, valTrunc, encoding, mimetype) {
    formdata[fieldname] = val;
  });

  busboy.on('finish', function() {
    rasterize(formdata).then(function (resp) {
      resp.pipe(res);
    })
    .catch(function (err) {
      res.status(500).send(err.toString());
    });
  });

  req.pipe(busboy);
});


app.listen(port);
