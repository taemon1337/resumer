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

let decrypt = function (str, opts) {
  let cipher = crypto.createDecipher(opts.cipher, opts.password)
  let cleartext = cipher.update(str, 'hex', 'utf8')
  cleartext += cipher.final('utf8')
  return cleartext
}

let loader = function (content, decryption) {
  if (typeof content === 'string') { content = JSON.parse(content) }
  let cleartext = {}
  let enciphered = {}
  let sec = null

  if (content && content.secure) {
    sec = {
      cipher: content.secure.cipher || defaults.cipher,
      password: content.secure.password || defaults.password
    }
  }

  if (sec !== null) {
    for (let key in content) {
      if (content.hasOwnProperty(key)) {
        let child = content[key]
        if (key === 'secure') {
          cleartext.secure = { cipher: sec.cipher } // store the cipher in clear but not password
        } else if (child.public) {
          cleartext[key] = child // any root level child with a truthy 'public' key will be left in the clear
        } else {
          if (decryption) {
            enciphered[key] = JSON.parse(decrypt(child, sec)) // if in decrypt mode on client
          } else {
            enciphered[key] = encrypt(JSON.stringify(child), sec) // else it will be encrypted
          }
        }
      }
    }

    return JSON.stringify(Object.assign({}, cleartext, enciphered))
  } else {
    return JSON.stringify(content)
  }
}

export default {
  loader: loader,
  encrypt: encrypt,
  decrypt: decrypt
}
