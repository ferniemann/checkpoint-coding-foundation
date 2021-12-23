function zipStrings(strA, strB) {
  const arrA = strA.split("")
  const arrB = strB.split("")
  const arrMerged = []
  const length = Math.max(arrA.length, arrB.length)

  for (let i = 0; i < length; i++) {
    arrMerged.push(arrA[i], arrB[i])
  }
  console.log(arrMerged)
  return arrMerged.join("")
}