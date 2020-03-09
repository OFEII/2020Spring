//1.格式化金钱，每千分位加逗号，需要注意的是：const target = '123456789' ，然后通过target.format()这样子调用

function formatData(num){
	num += '';
	if (!num.includes('.')) num += '.';
	return num.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
	  return $1 + ',';
	}).replace(/\.$/, '');

};
console.log(formatData(1234567891));


