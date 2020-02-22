//实现一个函数，返回参数的数据类型（主要是考察判断数组跟对象，分别写了instanceof 跟 isArray两种实现）
//  typeof除了array和null判断为object外，其他的都可以正常判断
// 一、构造函数，obj instanceof Array
  //instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
var c = [],
    d = {},
    e = undefined,
    f = null;

function isArray(obj){
	(obj instanceof Array)?console.log("true"):console.log("false")

} isArray(c);


//二、Array.isArray(obj) 用于确定传递的值是否是一个 Array
console.log(Array.isArray(c));


//三、原型 Array.prototype.isPrototypeOf(obj)
//
console.log(Array.prototype.isPrototypeOf((c)));


var obj = {};
//1、 toString() 来把一个布尔值转换成字符串,返回结果
console.log(Object.prototype.toString.call(obj) ==='[object Object]');
var toString = Object.prototype.toString;
console.log(toString.call(undefined)); // [object Undefined]
console.log(toString.call(null)); // [object Null]

//2、constructor
console.log(obj.constructor === Object);

//3.instanceof 需要注意的是由于数组也是对象，因此用 arr instanceof Object 也为true
console.log(obj instanceof Object);

//Object