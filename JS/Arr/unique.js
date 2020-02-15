function unique(arr) {
    return Array.from(new Set(arr))
}

// 根据数组某个属性去重
// 方法一
function unique(arr) {
  const res = new Map()
  return arr.filter(item => !res.has(item.productName) && res.set(item.productName, 1))
}

// 方法二
function unique(arr) {
  let result = {}
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i].key]) {
      result.push(arr[i])
      obj[arr[i].key] = true
    }
  }
}