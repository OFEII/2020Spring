// let add = function (){
// 	var sum=0;
// 	for(var i=0;i<arguments.length;i++){
// 		  sum+=arguments[i];
// 	}
// 	return sum;
// }

// console.log(add(1,2,3,4))
// let add = function (a, b, c) {
//   return a + b + c
// }

//   // 复杂版(每次可传入不定数量的参数，当所传参数总数不少于函数的形参总数时，才会执行)
//   function curry(fn) {
//     // 闭包
//     // 缓存除函数fn之外的所有参数
//     let args = Array.prototype.slice.call(arguments, 1)

//     return function () {
//       // 连接已缓存的老的参数和新传入的参数(即把每次传入的参数全部先保存下来，但是并不执行)
//       let newArgs = args.concat(Array.from(arguments))
//       console.log(args)
//       if (newArgs.length < fn.length) {// 累积的参数总数少于fn形参总数
//         // 递归传入fn和已累积的参数
//         return curry.call(this, fn, ...newArgs)
//       } else {
//         // 调用
//         return fn.call(this, newArgs)
//       }
//     }

//   }


const curry = (fn, ...arg) => {
    let all = arg || [],
        length = fn.length;

    return (...rest) => {
        let _args = all;
        _args.push(...rest);

        if (rest.length === 0) {
　　　　　　　all=[];
            return fn.apply(this, _args);
        } else {
            return curry.call(this, fn, ..._args);
        }
    }
}
let add = function(...rest) {
    let sum = 0;
    for(var i=0;i<rest.length;i++){
    	sum+=rest[i];
    }
    console.log(sum);
}

let f=curry(add)

f(10)(100)(1000)(10000)();
