var mergeConfigs = require('./lib/mergeConfigs')

module.exports = mergeConfigs([
  require('./configs/index.json'),
  require('./configs/react.json')
])
