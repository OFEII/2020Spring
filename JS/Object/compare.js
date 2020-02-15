// 1、单个属性排序
function compare(property) {
  return function(a, b) {
    let value1 = a[property]
    let value2 = b[property]
    return value1 - value2
  }
}
// 复制代码2、多个属性排序
function compare(name, minor) {
  return function(o, p) {
    var a, b
    if (o && p && typeof o === 'object' && typeof p === 'object') {
      a = o[name]
      b = p[name]
      if (a === b) {
        return typeof minor === 'function' ? minor(o, p) : 0
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1
      }
      return typeof a < typeof b ? -1 : 1
    } else {
      thro('error')
    }
  }
}
