//1.格式化金钱，每千分位加逗号，需要注意的是：const target = '123456789' ，然后通过target.format()这样子调用
// var a = 1123456789;
// // var b = a.toFixed(0).replace(/(\d{1,3})(,\d{3})*/g, '$1,');
// function toThousands(num) {
//     var b= (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
//     console.log(b);

// }
// toThousands(1234567891);
// 
function formatData(num){
	num += '';
	if (!num.includes('.')) num += '.';
	return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
	  return $1 + ',';
	}).replace(/\.$/, '');

};
console.log(formatData(1234567891.444444));


