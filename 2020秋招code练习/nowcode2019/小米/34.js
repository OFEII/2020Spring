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
        let arr =[1,1,2]
     
        for (let i = 3; i < n; i++) {
            arr[i] =sumString(''+arr[i-1],''+arr[i-3])
        }
            console.log(arr[n-1])
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