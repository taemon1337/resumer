const pbkdf2 = require('pbkdf2')
const crypto = require('crypto')

let defaults = {
  salt: '91017B29F811F913FDAB06363804AA44B75C04448D28620A54DB10EE2F8BD51AE25143080A0D44459C58BB6884FFC8F9BB0B45842B9DD80D3D7ECCEA00984BE627CD87F4EEB601987B824DFDC5BD5D5976D2192530D24821658F7B95DFD58A78',
  password: '',
  iterations: 10000,
  keylen: 32,
  cipher: 'sha512',
  algo: 'aes256'
}

function encrypt (str, opts) {
  try {
    if (opts.key && opts.algo) {
      let cipher = crypto.createCipher(opts.algo, opts.key)
      let encrypted = cipher.update(str, 'utf8', 'hex')
      encrypted += cipher.final('hex')
      return encrypted
    } else {
      throw new Error('No key/cipher provided!')
    }
  } catch (err) {
    console.error('Could not encrypt data', err, str)
    return str
  }
}

function decrypt (str, opts) {
  try {
    if (opts.key && opts.algo) {
      let cipher = crypto.createDecipher(opts.algo, opts.key)
      let cleartext = cipher.update(str, 'hex', 'utf8')
      cleartext += cipher.final('utf8')
      return cleartext
    } else {
      throw new Error('No key/cipher provided!')
    }
  } catch (err) {
    console.error('Could not decrypt data', err, str)
    return str
  }
}

function parse (data) {
  if (typeof data === 'string') {
    try {
      /* eslint-disable */
      return eval(data)
      /* eslint-enable */
    } catch (err) {
      console.warn('Error parsing JSON in crypt-loader', err)
      return data
    }
  } else if (typeof data === 'object') {
    return data
  } else {
    console.warn('Unexpected type, expecting string or object in crypt loader', typeof data)
    return data
  }
}

function cryptObject (obj, opts) {
  let encrypted = {}
  let ckey = pbkdf2.pbkdf2Sync(opts.password, opts.salt, opts.iterations, opts.keylen, opts.cipher)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let child = obj[key]
      if (child.public || opts.public) {
        encrypted[key] = child // only root objects which contain a truthy 'public' key are not encrypted.
      } else {
        // it'd be better to mix some salt into the json string because much of it or its format may be discoverable or known.
        if (opts.decrypt) {
          encrypted[key] = decrypt(child, { key: ckey, algo: opts.algo })
        } else {
          encrypted[key] = encrypt(JSON.stringify(child), { key: ckey, algo: opts.algo })
        }
      }
    }
  }

  return encrypted
}

let loader = function (content, decryption) {
  let obj = parse(content)
  if (this.cacheable) { this.cacheable() }

  if (obj.secure) {
    let secopts = Object.assign(defaults, obj.secure, { decrypt: !!decryption })
    // console.log('CRYPT LOADING: ', secopts)
    let encrypted = cryptObject(obj, secopts)

    return JSON.stringify(encrypted, null, 2)
  } else {
    let secopts = Object.assign(defaults, { public: true }, { decrypt: !!decryption })
    let encrypted = cryptObject(obj, secopts)
    
    return JSON.stringify(encrypted, null, 2)
  }
}

loader.prototype = {
  cryptObject: cryptObject,
  encrypt: encrypt,
  decrypt: decrypt
}

module.exports = function () {
  return loader.apply(this, arguments)
}
