const http = require('http')
const https = require('https')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')

function download (href, cb) {
  process.stdout.write('Downloading ' + href)
  
  let handleResponse = function (res) {
    let data = []

    res.on('data', function (chunk) {
      process.stdout.write('.')
      data.push(chunk)
    }).on('end', function () {
      process.stdout.write(' DONE!\n')
      cb(Buffer.concat(data), res.headers)
    }).on('error', function (err) {
      process.stdout.write('ERROR! ', err, '\n')
      cb(null)
    })
  }

  if (href.match(/^https:/)) {
    https.get(url.parse(href), handleResponse)
  } else {
    http.get(url.parse(href), handleResponse)
  }
}

/*
  require('./bulma.png?url=http://bulma.io/images/bulma-logo.png?base64=false')
  This loader will download from source location and save to ./assets/bulma.png, then pass off to url-loader
*/
module.exports = function downloadLoader(content) {
  console.log('DOWNLOAD LOADER', content, this.query)
  let callback = this.async()
  let filename = path.basename(this.resourcePath)
  let query = querystring.parse(this.query)
  this.cacheable && this.cacheable()

  if (query.url) {
    download(query.url, function (buffer) {
      let f = fs.createWriteStream('../assets/' + filename)
      f.on('error', function (err) {
        process.stderr.write('Error writing to file: ' + filename, err)
      })
      f.on('end', function () {
        if (query.base64) {
          callback(null, buffer.toString('base64'))
        } else {
          callback(null, buffer)
        }
      })
      f.write(buffer)
      f.end()
    })
  } else {
    return content
  }
}
