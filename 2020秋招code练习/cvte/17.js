// 1.首先，调用全局函数setPerson,传入person,此时person是   var person={name:"alan"};
// 传入以后，person.name="kevin";覆盖的person的name 属性。所以最终答案为Kevin
var setPerson=function(person){ 
    person.name="kevin";
     person={name:"nick"}; 
    }; 
    var person={name:"alan"}; 
    setPerson(person); 
    console.log(person.name);

// 2.map()方法返回一个新数组，数组中的元素为原始元素经过函数处理后输出的元素。不会改变原始数组
// map()按照原数组顺序一次处理数组元素
    var array1=Array(3);
    array1[0]=2;
   var result=array1.map(element => "1");
   console.log(result);

// 3.考察||，第一项为true，则返回第一项的结果，如果第一项是false,则不论第二项是什么，都返回。本题第二项为string
   var a= 2018<0 || typeof(2018+"");
   console.log(a);

//5 JSON.stringify：将JS数据结构转化为JSON字符串
// JSON.parse ：将JSON字符串解析为JS数据结构

for(var i={j:0};i.j <5;i.j++){
    (function(i){
    setTimeout(function(){console.log(i.j)},0);
    })(JSON.parse(JSON.stringify(i)));
 }

 //6
 for(var i=0; i<5;i.j++){
     (function (i) {
         setTimeout(() => {
             console.log(i.j)
         }, 0);
         
     })
     (i);
 }
 //7
 var elements = ['Fire','wind','Rain'];
    console.log(elements.join(','));
//8
var execFunc = function(){
    console.log("executed");
};
setTimeout(execFunc,0);
console.log("changed");
execFunc = function(){
    console.log("another executed");
}    