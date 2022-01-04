function filterApiData(apiData, mandatoryKeys) {
  const filteredArray = apiData.filter(function(el) {
    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (Object.keys(el).includes(mandatoryKeys[i])) {
        return true
      } else {
        return false
      }
    }
  })
  return filteredArray
}