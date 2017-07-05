let arg0 = '$0'
let vuer = new RegExp('vuex:([\\w\\.]+)', 'gi')
let ignoring = ['templates']

let regexlookupall = function (regex, val, db, templates, args) {
  let match = regex.exec(val)
  if (match) {
    // https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
    let rep = lookup(match[1].split('.').reduce((o, i) => o[i], db), db, templates, args)
    if (typeof rep === 'string') {
      return lookup(val.replace(match[0], rep), db, templates, args) // only if its a string can we do a replace
    } else {
      return lookup(rep, db, templates, args) // otherwise
    }
  } else {
    return val
  }
}

let lookup = function (val, db, templates, argument) {
  // console.log('LOOKUP', val, argument)
  if (!val) {
    return val
  } else if (typeof val === 'string') {
    if (val.substr(0, 1) === '$') {
      if (val === '$database') {
        return db
      } else if (val === '$layout') {
        return val
      } else if (val === '$templates') {
        return templates
      } else if (val === '$argument') {
        return argument
      }
    }
    if (val.indexOf(arg0) >= 0) {
      if (typeof argument === 'string') {
        return lookup(val.replace(arg0, argument), db, templates, argument)
      } else if (typeof argument === 'object') {
        return lookup(val.replace(arg0 + '.', '').split('.').reduce((o, i) => o[i], argument), db, templates, argument)
      } else {
        console.warn('Unexpected argument type: ', typeof argument, argument)
      }
    } else {
      return regexlookupall(vuer, val, db, templates, argument)
    }
  } else if (typeof val.forEach === 'function') {
    return val.map(function (item) { return lookup(item, db, templates, argument) })
  } else if (typeof val === 'object') {
    if (val.inject) {
      let j = val.inject
      if (j.args && templates[j.template]) {
        let args = lookup(j.args, db, templates, argument)
        if (j.as === 'array') {
          return args.map(function (subarg) { return lookup(templates[j.template], db, templates, subarg) })
        } else {
          let ret = {}
          args.forEach(function (subarg) { ret[subarg] = lookup(templates[j.template], db, templates, subarg) })
          return lookup(ret, db, templates, argument)
        }
      }
    } else {
      return inject(val, db, templates, argument)
    }
  } else if (typeof val === 'boolean') {
    return val
  } else {
    console.warn('Invalid Type for Lookup Value: only string, object, array, and falsy supported. type=', typeof val, val)
  }
}

// not using vuex the right way, just inject data from the 'database' into the layout object
let inject = function (obj, db, templates, argument) {
  let isarray = typeof obj.forEach === 'function'
  let injected = isarray ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (ignoring.indexOf(key) === -1) {
        injected[key] = lookup(obj[key], db, templates, argument)
      }
    }
  }

  return injected
}

export default {
  inject: inject,
  lookup: lookup
}
