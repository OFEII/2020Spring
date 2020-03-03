var compressChars = function(chars){
    let test = [...new Set(chars)];
    let cnt = 0;
    let res;
    for(let i = 0; i<chars.length-1; i++){
        if(chars[i] !== chars[i+1]){
            cnt++;
        }
    }
    res = test.length + cnt - 1;

    console.log(res) 
}

compressChars(["a","a","b","b","c","c","c"])

// let arr = [...new Set([1,'1',2,1,1,3,2,'4'])]
// console.log(arr);
// 2.数组去重

 // let array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3];
 // let set = [...new Set(array)]
 // console.log(set);
  
//  let arr =[1,'1',2,1,1,3,2,'4'];
//  const set = new Set(arr);
//  let a= Array.from(set);
//  console.log(a);

var oncetime = function(s){
    let arr =[]
        arr = s.split('')
    let res
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] !== arr[j]){
                arr.splice(i,1)
            }
        }     
    }        
    console.log(arr.length+1)
}
oncetime("happyhacker")

var firstUniqChar = function(s) {
    let len = s.length
    for (let i = 0;i < len;i++) {
      if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
        return i
      }
    }
    return -1
  };