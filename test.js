var sortString = function(s) {
  if(s.length===0) return s
  let d = new Array(26).fill(0)
  for (let i of s) {
    d[i.charCodeAt()-97]++;
}
  let res = ''
  // if()
  let arr = s.split('').sort((a,b)=>a=b)
  let set = [...new Set(arr)]
  let min = Math.min.apply(null,arr)
  // while(arr.length){
  //   if(arr.includes(set[]))
  // }
  // res += set.join('')
  // let map ={}
  return min
};
console.log(sortString("aaaabbbbcccc"))