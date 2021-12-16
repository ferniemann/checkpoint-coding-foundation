function zipStrings(strA, strB) {
  const arrA = strA.split("")
  const arrB = strB.split("")
  const arrMerged = []

  if (arrA.length > arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      arrMerged.push(arrA[i], arrB[i])
    }
  } else {
    for (let i = 0; i < arrB.length; i++) {
      arrMerged.push(arrA[i], arrB[i])
    }
  }

  return arrMerged.join("")
}
