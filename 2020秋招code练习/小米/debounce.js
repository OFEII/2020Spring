function debounce(fn,duration) {
    var timer
    window.clearTimeout(timer)
    time = setTimeout(()=>{
        fn.call(this)
    },duration)
}
function ttle(fn,duration) {
    let canIRun
    if(!canIRun)return
    fn.call(this)
    canIRun = false
    setTimeout(()=>{
        canIRun = true
    },duration)
    
}