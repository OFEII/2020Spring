const cnt = (arr, val)=>{
    arr.reduce((a,v)=>(v===val ? a+1 :a),0)
}
console.log(cnt([1, 1, 2, 1, 2, 3], 1))