const fs = require('node:fs')
const next = require('image-size-next')

function imageSize(input) {
  const data = typeof input === 'string'
    ? fs.readFileSync(input)
    : input

  return next.imageSize(data)
}

module.exports = imageSize
module.exports.default = imageSize
module.exports.imageSize = imageSize
module.exports.disableTypes = next.disableTypes
module.exports.types = next.types