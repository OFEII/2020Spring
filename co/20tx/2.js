const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let n = +inArr[0]
        let nArr = inArr[1].split(' ').map(e=>+e)
        let left = [],right = [],total = []
        let stack = new Stack()
        for (let i = n-1; i >= 0 ; i--) {
            right[i] = stack.length()
            while(right.length!=0 && nArr[i]>=nArr[stack.peek()]){
                stack.pop()
            }
            stack.push(i)  
        }
        stack.clear()
        for (let i = 0; i < n; i++) {
            total[i] = right[i] + stack.length()+1
            left[i] = stack.length()
            while(left.length!=0 && nArr[i]>=nArr[stack.peek()]){
                stack.pop()
            }
            stack.push(i) 
            
        }
        // console.log(right)
        // console.log(left)
        console.log(total.join(' '))

    }
})

function Stack() {
    this.dataStore = []
    this.top = 0
    this.peek = peek
    this.pop = pop
    this.push = push
    this.length = length
    this.clear = clear
}
function push(e) {
    this.dataStore[this.top++] = e
}
function peek() {
    return this.dataStore[this.top-1]
}
function pop() {
    return this.dataStore[--this.top]
}
function clear() {
    this.top = 0
}
function length() {
    return this.top
}