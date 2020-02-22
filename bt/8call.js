// call核心：
// 将函数设为对象的属性
// 执行&删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window
Function.prototype.myCall = function(context){
    context.fn = this
    let args = []
    for (let i = 1, len = arguments.length;i<len; i++) {
        args.push(arguments[i])
    }
    context.fn(...args)
    let res = context.fn(...args)
    delete context.fn
    return res
}

// 模拟 apply
Function.prototype.myapply = function(context, arr) {
    var context = Object(context) || window
    context.fn = this
  
    varres
    if (!arr) {
     res = context.fn()
    } else {
      let args = []
      for (let i = 0, len = arr.length; i < len; i++) {
        args.push("arr[" + i + "]")
      }
     res = eval("context.fn(" + args + ")")
    }
  
    delete context.fn
    returnres
  }
//bind
  Function.prototype.bind2 = function(content) {
    if(typeof this != "function") {
        throw Error("not a function")
    }
    // 若没问参数类型则从这开始写
    let fn = this;
    let args = [...arguments].slice(1);
    
    let resFn = function() {
        return fn.apply(this instanceof resFn ? this : content,args.concat(...arguments) )
    }
    function tmp() {}
    tmp.prototype = this.prototype;
    resFn.prototype = new tmp();
    
    return resFn;
}