var merge = require('./merge')

function mergeConfigs(configs) {
  // Merge all of the configs together, first to last.
  const firstConfig = configs.shift()
  return configs.reduce((config, nextConfig) => merge(config, nextConfig), firstConfig)
}

module.exports = mergeConfigs
