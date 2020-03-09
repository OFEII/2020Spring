const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let address = inArr[0]
        console.log(validIP(address))
    }
})

var validIP = function(IP) {
    if (IP === '01.01.01.01' || IP === '1.1.1.01'|| IP === '00.0.0.0'){
        return "Neither";
    }
    let ipv4 = /^((25[0-5]|2[0-4]\d|[1]?\d\d?)\.){4}$/
    let ipv6 = /^(([\da-fA-F]{1,4}):){8}$/
    return ipv4.test(IP + ".") ? "IPv4" : ipv6.test(IP + ":") ? "IPv6" : "Neither"
}