let array = [4, 5, 3, 2, 1]
for (let j = 0; j < array.length; j++) {
  let minIndex = j
  for (let i = j; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i
    }
  }
  if (minIndex !== j) {
    swap(array, j, minIndex)
  }
}
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
  }