// 作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。手串上的颜色一共有c种。现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。

/*判断手串珠子颜色不合格*/
//1
const readLine = require('readline');
let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0,    // 行
    n,    // 珠子数
    m,    // 间隔
    c,    // 颜色种类
    err = 0;    // 错误颜色数
   
let Beads = {};    // 按颜色分
let last;
rl.on('line', (line)=>{
    if(count==0){
        [n, m, c] = line.split(' ').map(ele=>+ele);
        count++;
        last = n - m;
    }
    else if(count <= n){
        let nowBead = line.split(' ');
        let ColorNum = +nowBead[0];
        for(let i= 1; i<=ColorNum; i++){  //遍历珠子上各色
            let nowColor = nowBead[i];
            if(Beads[nowColor]=='err'){       //当前颜色是错的
                continue;
            }else if(!Beads[nowColor]){       //当前颜色未记录过
                Beads[nowColor] = [count, count];    // 首次位置 当前位置
            }else{
                let BNC = Beads[nowColor];
                if(count - BNC[1] > m-1){
                    BNC[1] = count;
                    if(count - last){
                        if(BNC[0]+n-count <= m-1){
                            Beads[nowColor] = 'err';
                            err++;
                        }
                    }
                       
                }else{
                    Beads[nowColor] = 'err';
                    err++;
                }
            }
        }
        count++;
        if(count>n){
            console.log(err);
            rl.close();
        }
    }
   
})

//2
// 初始化串珠总个数，连续的串珠个数，颜色种类数，所有串珠的颜色信息数组, 同一颜色的串珠数组, 不合格的颜色个数
let ballNums, linkNums, colorNums, ballColor = [], sameColorBall = [], count = 0;
[ballNums, linkNums, colorNums] = readline().split(' ').map(item => Number(item));
  
// 依次保存每个串珠所用颜色信息
// 数组的每个元素都是一个数组，元素数组的第一位代表颜色个数，后续代表所用颜色
for(let i = 0; i < ballNums; ++i) {
    ballColor[i] = readline().split(' ').map(item => Number(item))
}
  
// 将同一颜色出现的串珠序号进行收集
ballColor.forEach((item, index) => {
    // 若该串珠所用颜色种类大于0
    // console.log(item, 'item');
    if(item[0] > 0) {
        let colorArr = item.slice(1)
        // 下面的item代表不同的颜色种类
        colorArr.forEach(color => {
            // 如果之前已经保存过使用某颜色的串珠序号，则直接将其添加到数组中去
            if(sameColorBall[color]) {
                sameColorBall[color].push(index + 1)
            } else {
               sameColorBall[color] = [index + 1]
            }
        })
    }
     
})
sameColorBall.forEach(item => {
    // sameColorBall[0]代表使用‘0’这种颜色的所有串珠的序号数组,这里的序号是按顺序排列的
    for(let i = 0; i < item.length - 1; ++i) {
        if(item[i+1] - item[i] < linkNums) {
            ++count;
            break;
        }
        if(ballNums - item[item.length - 1] + item[0] < linkNums) {
            ++count;
            break;
        }
    }
})
 
console.log(count);