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
        let date = inArr[0].split(' ').map(e => +e)
        let y = date[0], m = date[1], d = date[2]
        let month=[31,31,30,31,30,31,31,30,31,30,31]
        let res = []
        let newM, newD , newY
        if((y % 4 == 0 && y % 100 != 0 && y<3200) || (y % 400 == 0&& y<3200) ||(y % 3200 == 0 && y%172800 ==0 && y>=3200)){
            month.splice(1, 0, 29)
        } else {
            month.splice(1, 0, 28)
        }
        if(y.toString().length >3){
            newY = y.toString().slice(-4)
        }
        if(month[m-1] < d){
            if(m+1<10){
                newM = '0'+(m+1)
            }
            if(d-month[m-1]<10){
                newD = '0'+(d-month[m-1])
            }

            res = [newY,newM,newD].join('-')
        }else{
            
            if(m<10){
                newM = '0'+m
            }
            if(d<10){
                newD = '0'+d
            }else{
                newD = d
            }
            res = [newY,newM,newD].join('-')
        }
        
        console.log(res)
    }
})
