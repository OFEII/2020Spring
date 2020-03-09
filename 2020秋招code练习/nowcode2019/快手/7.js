let line = readline()
let res = []
for (let i = 0; i < line; i++) {
    let s = readline()
    //stringObject.substring(start,stop)
    //用于提取字符串中介于两个指定下标之间的字符
    let num = +(s.substring(s.length-6,s.length))
    res.push(num)
}
res.sort()
for(var j=0;j<res.length;j++){
    print(res[j])
}
