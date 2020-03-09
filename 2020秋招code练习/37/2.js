// 使用原生JS实现一个英雄类Hero, 可以按照以下方式调用（考察点： JavaScript流程控制）
// （1) Hero("37FEer")输出：
//     Hi!This is 37FEer!
// (2) Hero("37FEer").kill(1).recover(30)输出：
//     Hi!This is 37FEer!
//     Kill 1 bug (注意：数量1个，所以bug是单数）；
//     Recover 30 bloods;
// (3) Hero("37FEer").sleep(10).kill(2)输出：
//     Hi!This is 37FEer!
//     // 等待10秒..
//     Kill 2 bugs (注意：数量2个，所以bugs是复数)；

function Hero(name) {
    let o = new Object();
    o.name = name
    o.time = 0
    console.log("Hi! This is " + o.name)
    o.kill = function (bugs) {
        if(bugs == 1){
            console.log("Kill " + bugs + " bug")
        }else{
            setTimeout(()=>{
                console.log("Kill " + bugs + " bugs")
            }, 1000 * this.time);
        }
        return o
    }
    o.recover = function (bloods) {
        console.log("Recover "+(bloods)+" bloods")
        return o
    }
    o.sleep = function(sleepTime){
        o.time = sleepTime
        return o
    }
    return o
}
Hero("37er").sleep(10).kill(2)