十二、e-mail
	function isAvailableEmail(sEmail) {
    var parter = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    return parter.test(sEmail);
    
}

十一、封装函数 f，使 f 的 this 指向指定的对象

function bindThis(f, oTarget) {
    if(f.bind){
        return f.bind(oTarget);
    } else {
        return function(){
            return f.apply(oTarget,arguments);
        };
    }
}
十、为 Array 对象添加一个去除重复项的方法
Array.prototype.uniq = function () {
  var arr = [];
  var flag = true;
  this.forEach(function(item) {
    // 排除 NaN (重要！！！)
    if (item != item) {
      flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
      flag = false;
    } else {
      arr.indexOf(item) === -1 ? arr.push(item) : ''
    }

  });
  return arr;
}



一、.格式化金钱，每千分位加逗号
function format(num){
	num += '';
	if (!num.includes('.')) num += '.';
	return num.replace(/(\d)(?=(\d{3})+\.)/g,function($0,$1){
		return $1 + ',';
	}).replace(/\.$/,'');
}
console.log(format('123456789.0'))

二、数组去重
let arr =[1,'1',2,1,1,3,2,'4'];
let set = [...new Set(arr)];

console.log(set) 

三、ES6继承
class Person{
	constructor(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
	}
	sayName(){
		console.log((this.name))
	}
}


var person1 = new Person('ofeii',21,'student');

person1.sayName();

class VipPerson extends Person{
	constructor(name,age,job,level){
		super(name,age,job);
		this.level = level;
	}
	sayLevel(){
		console.log(this.level);
	}	
}

var person2 = new VipPerson('james',23,'palyer',1)

person2.sayLevel();
四、给定一个数组，返回所有的数字，如： [1,'3',false,null,100] ===> [1, 3, 100]
var arr = [1,'3',false,null,undefined,100];
var result = [];
for(var i=0;i<arr.length;i++){
	if (typeof(arr[i]) === 'number') {
		result.push(arr[i]);
	}
}
console.log(result)

五、//  typeof除了array和null判断为object外，其他的都可以正常判断
// 一、构造函数，obj instanceof Array
  //instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
var c = [],
    d = {},
    e = undefined,
    f = null;

function isArray(obj){
	(obj instanceof Array)?console.log("true"):console.log("false")

} 


//二、Array.isArray(obj) 用于确定传递的值是否是一个 Array
console.log(Array.isArray(c));


//三、原型 Array.prototype.isPrototypeOf(obj)
//
console.log(Array.prototype.isPrototypeOf((c)));
isArray(c);

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


六、实现函数
 f(1).val = 1  f(10)(100)(1000)(10000).val = 11110

function f (val){
	function inner (innerVal){
		return f(val + innerVal);
	}
		inner.val=val;
		return inner;
}
console.log(f(10)(100)(1000)(10000).val)
七、有3个-10--10之间的整数，写一个方法这三个数一共有多少可能想加等于10
function add3s (){
	var sum = 0;
	var count = 0;
	for (var i = -11; i < 11; i++) {
		for(var j = -11; j < 11; j++){
			for(var k = -11; k < 11; k++){
				sum = i + j + k;
				if (sum == 10) {
					count+=1;
				}
			}
		}
	}
	console.log(count);
}

add3s();
八、两个大整数相加
function sumString(a,b){
	var res = '', c = 0;
	a = a.split('');
	b = b.split('');

	while (a.length || b.length || c){
		c += ~~a.pop() + ~~b.pop();
		res = c % 10 + res;
		c = c>9
	}
	return res.replace(/^0+/,'');
}

九、最高词
function counts(article){
	article = article.trim().toUpperCase();
	var arr = article.match(/[A-z]+/g);
	article = " " + arr.join(" ")+ " ";
	var word, max = 0, num = 0,maxword = "";
	for(var i=0; i<arr.length; i++){
		word = new RegExp(" " + arr[i] + " ",'g');
		num = article.match(word).length;
		if(num>max){
			max = num;
			maxword = arr[i];
		}
	}
	console.log(maxword + " " + max);
}
counts("Age has has reached the end of the beginning of a word.")



var str = "nininihaoa";
var o = {};
for (var i = 0, length = str.length; i < length; i++) {
var char = str.charAt(i);

if (o[char]) {
o[char]++; //次数加1
} else {
o[char] = 1; //若第一次出现，次数记为1
}

}
console.log(o); //输出的是完整的对象，记录着每一个字符及其出现的次数

//遍历对象，找到出现次数最多的字符的次数
var max = 0;
for (var key in o) {
if (max < o[key]) {
max = o[key]; //max始终储存次数最大的那个
}
}

for (var key in o) {
if (o[key] == max) {
console.log(key);
console.log("最多的字符是" + key);
console.log("出现的次数是" + max);
}
} 

/********************************************
函数名：getElementsByClassName()
功能: 通过元素的className来获取元素，主要为了兼容非标准浏览器
参数：parent: 传入查找元素的父级，在对应的父级中找相应元素  
      tagName:需要获取元素的标签    className: 传入的元素className
返回值：返回包含有需要查找的className的元素
*********************************************/
function getElementsByClassName (parent,tagName,className) {

    if (document.getElementsByClassName) {      //判断是否有该方法，有该方法直接返回调用

        return getElementsByClassName(className);

    } else {

        var aEls=parent.getElementsByTagName(tagName);  //从父级中查找该元素的标签
        var arr=[];

        for (var i=0; i<aEls.length; i++){

            var aClassName=aEls[i].className.split('');  //将获取的className拆分为数组，这么做即使一个标签中的class属性有多个值时也能查找得到

            for (var j=0; j<aClassName.length; j++){    //将查询的className在拆分后的数组内进行查询

                if (aClassName[j]==className){
                    arr.push(aEls[i]);      //如果找到，将元素对象aEls[i]添加到空数组arr中
                    break;      //找到一个后就跳出循环，防止有重名现象
                }
            }
        }

        return arr;     //返回arr数组
    }

}
