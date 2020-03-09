const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        let a=1, b=2 ,temp
        if(n<=3){
            console.log(n)
        }else{
            while(--n >0) {
                temp = sumString(''+a,''+b)
                a=b
                b=temp
            }
            console.log(a)
        }
    }
})
function sumString(a,b){
	var res = '', c = 0;
	a = a.split('');
	b = b.split('');

	while (a.length || b.length || c){
		c += ~~a.pop() + ~~b.pop();
		res = c % 10 + res;
		c = c>9
	}
	return res.replace(/^0+/,'');
}
