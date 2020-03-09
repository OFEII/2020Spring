// // 未添加异步处理等其他边界情况
// // ①自动执行函数，②三个状态，③then
// class Promise {
//     constructor (fn) {
//       // 三个状态
//       this.state = 'pending'
//       this.value = undefined
//       this.reason = undefined
//       let resolve = value => {
//         if (this.state === 'pending') {
//           this.state = 'fulfilled'
//           this.value = value
//         }
//       }
//       let reject = value => {
//         if (this.state === 'pending') {
//           this.state = 'rejected'
//           this.reason = value
//         }
//       }
//       // 自动执行函数
//       try {
//         fn(resolve, reject)
//       } catch (e) {
//         reject(e)
//       }
//     }
//     // then
//     then(onFulfilled, onRejected) {
//       switch (this.state) {
//         case 'fulfilled':
//           onFulfilled()
//           break
//         case 'rejected':
//           onRejected()
//           break
//         default:
//       }
//     }
//   }
let p = new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5 ? true : false;
    if(flag) {
        console.log('pending=>resolved');
        resolve('success');
    }
    else {
        console.log('pending=>rejected');
        reject('fail');
    }
 });
 
 // @1
 p.then((result) => {
     console.log('接受resolved的结果');
     console.log(result);
 }, (err) => {
     console.log('捕获错误的结果');
     console.log(err);
 });

//  let arr = [1, 2, 3].map(
//     (value) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(value);
//             }, value * 1000);
//         });
//     }
// );

// console.log(arr);

// let promises = Promise.all(arr)
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

const first = () => (new Promise((resolve,reject)=>{
    console.log(3);
    let p = new Promise((resolve, reject)=>{
         console.log(7);
        setTimeout(()=>{
           console.log(5);
           resolve(6); 
        },0)
        resolve(1);
    }); 
    resolve(2);
    p.then((arg)=>{
        console.log(arg);
    });

}));

first().then((arg)=>{
    console.log(arg);
});
console.log(4);
