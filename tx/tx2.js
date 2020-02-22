// let arr = [...new Set([1,'1',2,1,1,3,2,'4'])]
// console.log(arr);
// 2.数组去重

 // let array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3];
 // let set = [...new Set(array)]
 // console.log(set);
  
 let arr =[1,'1',2,1,1,3,2,'4'];
 const set = new Set(arr);
 let a= Array.from(set);
 console.log(a);