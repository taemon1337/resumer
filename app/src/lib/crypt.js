(function (exports) {
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

  function genkey (opts) {
    return pbkdf2.pbkdf2Sync(opts.password, opts.salt, opts.iterations, opts.keylen, opts.cipher).toString('hex')
  }

  function encrypt (str, opts) {
    if (opts.key && opts.algo) {
      let cipher = crypto.createCipher(opts.algo, opts.key)
      let encrypted = cipher.update(str, 'utf8', 'hex')
      encrypted += cipher.final('hex')
      return encrypted
    } else {
      throw new Error('No key/algorithm provided!')
    }
  }

  function decrypt (str, opts) {
    if (opts.key && opts.algo) {
      let cipher = crypto.createDecipher(opts.algo, opts.key)
      let cleartext = cipher.update(str, 'hex', 'utf8')
      cleartext += cipher.final('utf8')
      return cleartext
    } else {
      throw new Error('No key/algorithm provided!')
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
    let publickeys = []
    let ckey = genkey(opts)

    for (let key in obj) {
      if (obj.hasOwnProperty(key) && key !== 'secure') {
        let child = obj[key]
        if (child.public || opts.public) {
          if (!opts.decrypt) {
            publickeys.push(key)
          }
          encrypted[key] = child // only root objects which contain a truthy 'public' key are not encrypted.
        } else {
          // it'd be better to mix some salt into the json string because much of it or its format may be discoverable or known.
          if (opts.decrypt) {
            encrypted[key] = JSON.parse(decrypt(child, { key: ckey, algo: opts.algo }))
          } else {
            encrypted[key] = encrypt(JSON.stringify(child), { key: ckey, algo: opts.algo })
          }
        }
      }
    }

    if (publickeys.length) {
      let msg = '\nWARNING: PUBLIC DATA IS BEING RELEASED!\nThe following site keys are publically exposed\n'
      msg += 'Site: ' + obj.id + '\n  - ' + publickeys.join('\n  - ') + '\n'
      msg += '################################################'
      console.log(msg)
    }

    return encrypted
  }

  let mergeoptions = function (opts1, opts2) {
    return Object.assign({}, defaults, Object.assign({}, opts1, opts2))
  }

  let loader = function (content, decryption) {
    let obj = parse(content)
    let encrypted = null
    let secopts = null

    if (obj.secure) {
      secopts = mergeoptions(obj.secure, { decrypt: !!decryption })
      encrypted = cryptObject(obj, secopts)
      encrypted.secure = mergeoptions(obj.secure, { password: defaults.password })
    } else {
      secopts = mergeoptions({ public: true, decrypt: !!decryption })
      encrypted = cryptObject(obj, secopts)
      encrypted.secure = false
    }

    return JSON.stringify(encrypted, null, 2)
  }

  exports.loader = loader
  exports.encrypt = encrypt
  exports.decrypt = decrypt
  exports.cryptObject = cryptObject
  exports.genkey = genkey
  exports.mergeoptions = mergeoptions
})(typeof exports === 'undefined' ? this['crypt'] = {} : exports)
