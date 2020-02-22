for (let j = 1; j < array.length; j++) {
    let i = j
    let target = array[i]
    while(i > 0 && array[i-1] > target) {
      array[i] = array[i-1]
      i--
    }
    array[i] = target
  }
  