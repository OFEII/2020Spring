const curry = (fn,arr=[])=>
fn.length === arr.length ? fn(...arr):(...args)=>
curry(fn,[...arr,...args])
  
  let curryTest=curry((a,b,c)=>a+b+c)
  // console.log(curryTest(1,2,3)(4) ) //返回10
  console.log(curryTest(1,2)(4) ) //返回10
  // console.log(curryTest(1,2)(3,4) ) //返回10
  console.log(curryTest(2,3)(4) ) //返回10
  
function curry(fn, args) {
  var length = fn.length;
  var args = args || [];
  return function(){
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      return curry.call(this,fn,newArgs);
    } else {
      return fn.apply(this,newArgs);
    }
  }
}