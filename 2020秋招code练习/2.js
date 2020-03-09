function AIDog(color) {
    let o = new Object()
    o.color = color
    o.time = 0
    console.log('the color of this AIDog is '+ color)
    o.clean = function (cleanTime) {
        o.time = cleanTime
        setTimeout(()=>{
            console.log('每次打扫所隔时间(h)：'+ cleanTime)
        },1000*3600*this.time)
        return o
    }
    o.weakUp = function name(weakUpTime) {
        let nowTime = new Date().getTime()
        o.time = weakUpTime
        if(o.time == nowTime){
            console.log('每天早上打扫时间(h)：'+ weakUpTime)
            console.log('wang-wang')
        }
        return o
    }
    return o
}

AIDog('white').clean(24).weakUp(8.5)
