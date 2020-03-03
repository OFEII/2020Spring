function C(){
    var a_args=Array.prototype.slice.call(argumens,0,2);
    var b_args=Array.prototype.slice.call(arguments,2);
    A.apply(this,a_args);
    B.apply(this,b_args);
}

function C(...s){
    A.call(this,s[0],s[1]);
    B.call(this,s.slice(2));
}

function C(...s){
    A.apply(this,s.slice(0,2));
    B.apply(this,s.slice(2));
}

function C(){
 A(arguments[0],arguments[1]);
 B(Array.prototype.slice.call(arguments,2));
} 
console.log(Number(undefined))
function* testGenerator(x){
    yield x+1;
    return"hello cvte";
    yield x+2;
    }
    var testGen= testGenerator(1);
    testGen.next();
    testGen.next();
    console.log(testGen.next());

    var array1=[5,12,8,130,44];
var found= array1.find(element =>element > 10);
console.log(found)

var str="This apple costs "+50.5+0.5;
console.log(str)