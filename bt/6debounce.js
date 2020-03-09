// 防抖函数
function debounce(fn,delay) {
    let timer = null
    return function () {
        if(timer!==null){
            clearTimeout(timer)
        }
        timer = setTimeout(fn,delay)
    }
}

//handle
function handle() {
    console.log(Math.random())
}

//scroll
window.addEventListener('scroll',throttle2(handle,1000))

// throttle（时间戳）
function throttle(fn,delay) {
    let pre = Date.now()
    return function () {
        let now = Date.now()
        if(now-pre>=delay){
            fn.apply(this, arguments)
            prev = Date.now()
        }
    }
}
// 节流throttle代码（定时器)
// function throttle2(fn,delay) {
//     let timer = null
//     return function () {
//         if(!timer){
//             timer = setTimeout(function () {
//                 fn.apply(this,arguments)
//                 timer = null
//             },delay)
//         }
//     }
// }