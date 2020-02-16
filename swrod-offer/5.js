let inStack = []
let outStack = []

function push(node) {
    inStack.push(node)
}
function pop() {
    if(!outStack.length)
    while (inStack.length) {
        outStack.push(inStack.pop())
    }
    return outStack.pop()
}