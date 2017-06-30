const mimes = require('../assets/mimes.json')
const http = require('http')
const https = require('https')
const url = require('url')
const regex = new RegExp('(DownloadAndBase64!(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)))', 'g')

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

function matchNext (content, cb) {
  let match = regex.exec(content)
  if (match) {
    let orig = match[1]
    let href = match[2]
    download(href, function (data, headers) {
      if (data) {
        let datauri = 'data:' + getMime(href, headers) + ';base64,' + data.toString('base64') // return `module.exports = "data:${getMime(this.resourcePath)};base64,${content.toString('base64')}"`
        matchNext(content.replace(orig, datauri), cb) // replace orig with data uri
      } else {
        matchNext(content.replace(orig, href), cb) // if unsuccessful, replace original with link
      }
    })
  } else {
    cb(content)
  }
}

function getMime(path, headers) {
  if (headers && headers['content-type']) {
    return headers['content-type']
  } else {
    const extension = path.split('.').pop().toLowerCase()
    const mime = mimes[extension]
    if (!mime) {
      throw new Error('Unsupported type of image of extension ' + extension + ': ' + path)
    }
    return mime
  }
}

module.exports = function remoteImageLoader(content) {
  let callback = this.async()
  this.cacheable && this.cacheable()

  if (!callback) {
    return content.replace(/DownloadAndBase64!/g, '') // sync fallback
  } else {
    matchNext(content, function (resp) {
      callback(null, resp)
    })
  }
}
// module.exports.raw = true
