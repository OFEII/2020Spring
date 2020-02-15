// 复制代码字符串翻转
// 方法一
var arr = str.split('')
var newArr = []
for (var i = 0; i < arr.length; i++) {
  newArr[i] = arr[arr.length - i - 1]
}
var newStr = newArr.join('')
console.log(str0)

// 方法二
var newStr = ''
for (var i = 0; i < str.length; i++) {
  newStr += str.charAt(str.length - i - 1)
}
console.log(newStr)

// 方法三
var newStr = str
  .split('')
  .reverse()
  .join('')
console.log(newStr)

// 方法四
var arr = str.split('')
var obj = Array.from(new Set([...arr]))
var newStr = ''
for (i of obj) {
  newStr += obj[arr.length - i]
}
console.log(newStr)

// 方法五
var arr = str.split('')
var newArr = []
while (arr.length > 0) {
  newArr.push(arr.pop())
}
var newStr = newArr.join('')
console.log(newStr)