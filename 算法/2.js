function checkArray(array) {
    return Array.isArray(array)
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
function bubble(array) {
    checkArray(array);
    for (let i = array.length - 1; i > 0; i--) {
      // 从 0 到 `length - 1` 遍历
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) swap(array, j, j + 1)
      }
    }
    return array;
  }