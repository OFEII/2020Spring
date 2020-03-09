var name = '123'
var obj = {
    name: 'abc',
    foo: function () {
        console.log(this.name)
    }
}
let a =1
a=10
console.log(a)
setTimeout(function() {
    console.log(11111);
  }, 0);
  new Promise(resolve => {
    console.log(22222);
    resolve(console.log(33333));
    console.log(44444);
  }).then(function() {
    console.log(55555);
  });
  console.log(66666);

  let y= 172800
let res = y.toString().slice(-4)
console.log(res)

let dp = new Array(4).fill(0).map(()=> new Array(4).fill(0))
console.log(dp)

var a=[1,2,3,4,5,6]
a=a.slice(-1)
console.log(a)

