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
        let arr = inArr[0].split('')
        let res = permuteUnique(arr).map(e=>e.join(''))
        res.sort()
        let str = ''
        for (let i = 0; i < res.length; i++) {
            if(i==0){
                str += '['+res[i] +', '
            }else if(i==res.length-1){
                str += res[i] +']'
            }else{
                str += res[i]+', '
            }
        }
        console.log(str)
    }
})
var permuteUnique = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }
    
    let [num, ...restNums] = nums;
    let resArr=permuteUnique(restNums).reduce((res, iter) => {
        let iterRes = [];
        for (let i = 0; i <= iter.length; i++) {
            let tmp = [...iter];
            tmp.splice(i, 0, num);
            iterRes.push(tmp);
        }
        return res.concat(iterRes);
    }, []);
    let res={}
        resArr.forEach(item=>{
            res[item]=item;
        });
        return Object.values(res)
};