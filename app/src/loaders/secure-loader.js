const crypto = require('crypto')

let defaults = {
  cipher: 'aes256',
  password: ''
}

let encrypt = function (str, opts) {
  let cipher = crypto.createCipher(opts.cipher, opts.password)
  let encrypted = cipher.update(str, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

module.exports = function (content) {
  if (typeof content === 'string') { content = JSON.parse(content) }
  let cleartext = {}
  let encrypted = {}
  let sec = null

  if(content && content.secure) {
    console.log('ENCRYPTING SECURE CONTENT', content.secure)
    sec = {
      cipher: content.secure.cipher || defaults.cipher,
      password: content.secure.password || defaults.password
    }
  }

  if (sec !== null) {
    for (let key in content) {
      if (content.hasOwnProperty(key)) {
        let child = content[key]
  
        // any root level child with a truthy 'public' key will be left in the clear
        if (child.public) {
          cleartext[key] = child
        } else {
          encrypted[key] = encrypt(JSON.stringify(child), sec)
        }
      }
    }
    
    return JSON.stringify(Object.assign({}, cleartext, encrypted))
  } else {
    return JSON.stringify(content)
  }
}
