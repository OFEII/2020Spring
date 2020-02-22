function mergeSort(array) {
    if (array.length < 2) {
        return array
      }
    let m = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, m))
    let right = mergeSort(array.slice(m))
    return merge(left, right)
  } 
  
