function ps(n){
    let res =[]
    let str = "()"
    for (let i = 0; i < n; i++) {
        res.push(str)
    }
}
ps(1) //["()"]
ps(2) //["(())","()()"]