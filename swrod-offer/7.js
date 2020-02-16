// 7题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39
function Fibonacci(n)
{
    let a = 0, b = 1
    while (n>0) {
        b+=a
        a=b-a
        n--
    }
    return a
}

function Fibonacci(n)
{
    var a=1,b=1,temp;
    if(n<=0){
        return 0;
    }
    for(var i=2;i<=n;i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return a;
    // write code here
}