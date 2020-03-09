// 定义一个Promise，用来模拟异步请求，作用是传入参数++
function getNum(num) {
	return new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve(num + 1)
		}, 1000)
	})
}
// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function *() {
	const f1 = yield getNum(1);
	console.log(1);

	const f2 = yield getNum(2);
	console.log(2);
}
// 自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(func) {
	var gen = func();

	function next(data) {
		var result = gen.next(data);

		if (result.done) return result.value;

		result.value.then(function(data) {
			next(data);
		})
	}

	next();
}
asyncFun(func);

// 手动封装定时函数
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}