const curry = (fn, arr = []) => 
fn.length === arr.length ? fn(...arr) : (...args) => 
curry(fn, [...arr, ...args]);