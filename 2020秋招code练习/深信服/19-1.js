var readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var str1='';
var str2='';
 
var time=0;
r1.on('line',function(line){
    //console.log(time)
    if(time==0){
        str1+=line;
        time++;
    }else{
        str2+=line;
        var c=str2.split('');
        for(var i=0;i<c.length;i++){
            if(c[i]=='?'){
            c[i]='(.){1,3}';
            }
        }
        str2=c.join('');
        var reg = new RegExp("^"+str2+"","i")
        var d =[];
        d = reg.exec(str1);
        if(reg.test(str1)){
            console.log(d[0].length)
        }else{
            console.log(-1)
            //console.log(111)
        }
    }
     
})