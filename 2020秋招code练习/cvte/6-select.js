//方法一
var obj={
    x:{
        xx:{
            xxx:{
                xxxx:1
            }
        }
    }
};
Object.prototype.select=function (str) {
    var arr=str.split('.');
    var result;
    for(var i=0;i<arr.length;i++){
        if(i===0){
            result=this[arr[i]];
            console.log(this);
        } else{
            result=result[arr[i]];
        }
    }
    return result;
};
console.log(obj.select('x.xx.xxxx'));//undefined
console.log(obj.select('x.xx.xxx.xxxx'));//1
console.log(obj.select('x').select('xx.xxx'));//{ xxxx:1 }