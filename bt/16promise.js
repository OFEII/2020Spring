// let promise  = new Promise((resolve, reject)=>{
//     if(true){
//         resolve(value)
//     }else{
//         reject(error)
//     }
// })

// promise.then(function (value) {
//     //success
// },function (value) {
//     //failure
// })

function myPromise(constructor) {
    let self = this
    self.status = "pending"
    self.value = undefined
    self.reason = undefined
    function reslove(value) {
        if(self.status === "pending"){
            self.value = value
            self.status = "resolved"
        }
    }
    function reject(reason) {
        if(self.status="pending"){
            self.reason = reason
            self.status ="rejected"
        }
    }
    //捕获构造异常
    try{
        constructor(reslove,reject)
    }catch(e){
        reject(e)
    }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this
    switch (self.status) {
        case "resolved":
            onFullfilled(self.value)
            break
        case"rejected":
            onRejected(self.reason)
            break
        default:
            break
    }
}
let p = new myPromise(function (resolve, reject) {
    resolve(1)
})
p.then(function (x) {
    console.log(x)
})