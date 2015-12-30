function merge(configA, configB) {
  // If the configs are arrays, concatenate them.
  if (Array.isArray(configA) && Array.isArray(configB)) {
    return configA.concat(configB)
  }

  // If the configs are objects, do a recursive merge on every key.
  else if (typeof configA === 'object' && typeof configB === 'object') {
    const configC = {}

    Object
    .keys(configA)
    .forEach(key => configC[key] = merge(configA[key], configB[key]))

    Object
    .keys(configB)
    .filter(key => configC[key] == null)
    .forEach(key => configC[key] = configB[key])

    return configC
  }

  // Otherwise return the second config.
  // If the second config is falsey then return the first.
  else {
    return configB != null ? configB : configA
  }
}

module.exports = merge
