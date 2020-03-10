// 请设计一个算法，给一个字符串进行二进制编码，使得编码后字符串的长度最短。
function Power(base, exponent)
{
    var last=1
    if(exponent>=0){
       exponent=exponent
        for(var i=0;i<exponent;i++){
          last*=base
         } 
    }else{
       exponent=-exponent
        for(var i=0;i<exponent;i++){
          last*=base
         } 
        last=1/last
    }
       
    return last
}
module.exports = {
    Power : Power
};