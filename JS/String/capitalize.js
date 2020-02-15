//首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')
capitalize('fooBar') // 'FooBar'

console.log(capitalize('ofeii'))

// 单个单词首字母大写
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase())
capitalizeEveryWord('hello world!') // 'Hello World!'

console.log(capitalizeEveryWord('hello world!'))


