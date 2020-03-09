// let n = +"20"
let n = +readline()
let cnt = 0
for (let i = 0; i < n+1 ; i++) {
    let s = i.toString() //tostring
    let numArr = s.split('') // numArr
    let flag = 0
    for (let j = 0; j < numArr.length; j++) {
        let z = numArr[j]
        if(z==3 || z==4 || z==7){
            flag = 0
            break
        }else if(z==2 || z==5 || z==6 || z==9){
            flag = 1
        }
    }
    if(flag){
        cnt++
    }
}
console.log(cnt)