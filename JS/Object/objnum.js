const nums = [3, 5, 6, 82, 1, 4, 3, 5, 82]

const result = nums.reduce((tally, amt) => {
  tally[amt] ? tally[amt]++ : (tally[amt] = 1)
  return tally
}, {})

console.log(result)
//{ '1': 1, '3': 2, '4': 1, '5': 2, '6': 1, '82': 2 }
