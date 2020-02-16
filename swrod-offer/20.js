// 增加一个辅助栈，每次压入栈时，和辅助栈栈顶值比较，小则压入辅助栈当中，大则再次压入辅助栈栈顶的值。这样辅助栈的栈顶数据一直是数据栈中最小的值。
var s = []
var mins = []
function push(node)
{
    s.unshift(node)
    if(mins.length === 0){
        mins.unshift(node)
    }else{
        (mins[0] > s[0]) ? mins.unshift(node) : mins.unshift(mins[0])
    }
}
function pop()
{
    s.shift()
    mins.shift()
}
function top()
{
    return s[0]
}
function min()
{
    return mins[0]
}