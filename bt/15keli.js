const curry = (fn, arr = []) => (...args) => (
    arg => arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
  )([...arr, ...args])
  
  let curryTest=curry((a,b,c,d)=>a+b+c+d)
  console.log(curryTest(1,2,3)(4) ) //返回10
  console.log(curryTest(1,2)(4)(3) ) //返回10
  console.log(curryTest(1,2)(3,4) ) //返回10