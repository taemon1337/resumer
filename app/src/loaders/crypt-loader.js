const crypt = require('../lib/crypt')

module.exports = function () {
  if (this.cacheable) { this.cacheable() }
  return crypt.loader.apply(this, arguments)
}
