//继承，es5 跟 es6写法

// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;  
// }

// Person.prototype={
//     constructor:Person,
//     sayName:function(){
//        alert(this.name);
//   }    
// }

// var person1 = new Person('amie',21,'engerineer');

// function VipPerson(name,age,job,level){
// 　　Person.call(this,name,age,job);
// 　　this.level = level;
// }　　
// VipPerson.prototype = new Person();
// VipPerson.prototype.construtor = VipPerson; //重写construtor
// VipPerson.sayLevel = function(){
// 　　alert(this.level);
// } 
// var person2 = new VipPerson('amie',21,'student',3)


class Person{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;  
    }
     sayName(){
        alert(this.name);      
     }
}    

var person1 = new Person('amie',21,'engerineer');

class VipPerson extends Person{
    constructor(name,age,job,level){
        super(name,age,job);
        this.level = level;
    }
     sayLevel(){
        alert(this.level);      
     }
}    

var person2 = new VipPerson('dick',21,'student',3)