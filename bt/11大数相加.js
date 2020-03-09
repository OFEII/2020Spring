//实现一个函数，完成超过范围的两个大整数相加功能
function sumStrings(a,b){
    var res='', c=0;
    a = a.split('');
    b = b.split('');
    
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}
  console.log(sumStrings('37486040775460377773700','7669000000000000000000000000000'))