var arr= [1,'3',false,null,100] ;
var result=[ ];
var str = arr.join('');

for(var i=0;i<arr.length;i++){
	var str = arr[i].join('');
	if(typeof(str.replace(/\d/g,""))=='number'){
		result.push(str[i]);			
	}
	console.log(str[i])
}
console.log(result);




// result=arr.map((val)=>{
// 	if(!isNaN(val).toString()){
// 		return val;
// 	}
	
// })

// 4.给定一个数组，返回所有的数字，如： [1,'3',false,null,100] ===> [1, 3, 100]
// 12345 return arr.map((val) => {    if (!isNaN(val.toString())) {        return val;    }})

// console.log(!isNaN(null));