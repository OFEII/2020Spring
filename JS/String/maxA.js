// 复制代码统计字符串出现最多的字母和次数
var str = 'abcdeddd'
var n = {}
for (var i = 0; i < str.length; i++) {
  var char = str.charAt(i)
  if (n[char]) {
    n[char]++ //计算出现的次数
  } else {
    n[char] = 1 //第一次出现标记为1
  }
}
console.log(n)
var max = 0
var maxChar = null
for (var key in n) {
  if (max < n[key]) {
    max = n[key]
    maxChar = key
  }
}
console.log('最多的字符' + maxChar) //"最多的字符d"
console.log('出现次数' + max) //"出现次数4"