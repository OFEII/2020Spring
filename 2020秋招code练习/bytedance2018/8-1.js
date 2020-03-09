// 为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。
 
let queryArr = [];
//第一行输入，用户个数
let userNumber = readline(),
    //第二行输入，用户对应喜好，转化为数组
    loveValue = readline().split(' '),
    //第三行输入，查询组数
    queryArrList = readline();
//循环所有查询组，4行开始的所有行
for(let i = 0;i<queryArrList;i++){
    //取得每行值，转为数组
    queryArr[i] = readline().split(' ');
}
let arr = [];
//遍历喜好度数组，将相同喜好度的下标添加进一个新数组
//样例添加完后生成arr=[,[0],[1],[2,3],,[4]]
loveValue.forEach((item,index) => {
    if(arr[item] == undefined){
        arr[item] = [];
    }
    arr[item].push(index);
});
 
//遍历查询组
for(let j = 0;j<queryArrList;j++){
    //取得每行第一个数l，转化为下标-1
    let start = queryArr[j][0] - 1,
    //取得每行第二个数r，转化为下标-1
    end = queryArr[j][1] - 1,
    //取得每行第三个数k，喜好度
    value = queryArr[j][2],
    //初始化结果用户个数
    geshu = 0;
    if(arr[value] == undefined){
        //下标数组为未定义时，无喜好度
        console.log(0);
    }else{
        //循环下标数组内元素，判断元素数组内元素是否处于标号间
        arr[value].forEach(e=>{
            if(e>=start && e<=end){
                geshu++;
            }
        })
        print(geshu);
    }
}


//2 
let print = (_favo, _queryLRK) => {
    for (let i=0; i<_queryLRK.length; i++) {
      let [l, r, k] = _queryLRK[i];
      let fk = _favo[k];
      let count = 0;
      if (fk === undefined) {
        console.log(0);
      } else {
        for (let j=0; j<fk.length; j++) {
          if (l <= fk[j] && fk[j] <= r) {
            count ++;
          }
        }
        console.log(count);
      }
    }
  }
    
  let readline = require('readline');
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let n,q,
      count = 0,
      favo = {},
      queryLRK = []; 
  rl.on('line', (line) => {
    let tokens = line.split(' ');
    if (count === 0) {
      n = parseInt(tokens[0]);
    } else if (count === 1) {
      for (let i=0; i<n; i++) {
        if (favo[tokens[i]] === undefined) {
          favo[tokens[i]] = [];
        }
        favo[tokens[i]].push(i+1);
      }
    } else if (count === 2) {
      q = parseInt(tokens[0]);
    } else {
      queryLRK.push(tokens);
      q--;
      if (q === 0) {
        print(favo, queryLRK);
        rl.close();
      }
    }
    count < 3 && count++;
  });
// 3
  const readline=require('readline');
  const rl=readline.createInterface({
      input:process.stdin,
      output:process.stdout
  });
  let linecount=0;
  let usercount=0;
  let groupcount=0;
  let likeMap={};
  rl.on("line",function(line){
      if(linecount==0){
          usercount=parseInt(line);
          linecount++;
      }else if(linecount==1){
          let likeArray=line.split(' ');
          likeArray.forEach(function(likeKey,index){
              if(likeMap[likeKey]){
                  likeMap[likeKey].push(index+1);
              }else{
                  likeMap[likeKey]=[index+1];
              }
          });
          linecount++;
      }else if(linecount==2){
          groupcount=parseInt(line);
          linecount++;
      }else{
          let valueArray=line.split(' ');
          let l=parseInt(valueArray[0]);
          let r=parseInt(valueArray[1]);
          let key=parseInt(valueArray[2]);
          let result=0;
          if(likeMap[key]){
              likeMap[key].forEach(tag=>{
                  if(tag<=r&&tag>=l)
                      result++;
              })
          }
          linecount++;
          console.log(result);
          groupcount--;
          if(groupcount==0){
              linecount=0;
              process.exit(0);
          }
      }
     
  }); 