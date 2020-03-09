// 小招喵喜欢吃喵粮。这里有 N 堆喵粮，第 i 堆中有 p[i] 粒喵粮。喵主人离开了，将在 H 小时后回来。

// 小招喵可以决定她吃喵粮的速度 K （单位：粒/小时）。每个小时，她将会选择一堆喵粮，从中吃掉 K 粒。如果这堆喵粮少于 K 粒，她将吃掉这堆的所有喵粮，然后这一小时内不会再吃更多的喵粮。  

// 小招喵喜欢慢慢吃，但仍然想在喵主人回来前吃掉所有的喵粮。

// 返回她可以在 H 小时内吃掉所有喵粮的最小速度 K（K 为整数）。
let line = "'3 6 7 11' '8'".split(' ')
// let line = readline().split(' ')
let h = parseInt("'3 6 7 11' '8'")
let k = 1
while(true){
    let temp = 0,
        flag = 1
    for (let i = 0; i < line.length; i++) {
        let now = parseInt(line[i])
        temp += Math.ceil(now/k)
        if (temp > h) {
            flag = 0
            break
        }
    }
    if(flag === 0){
        k++
        continue
    }else{
        break
    }        
}
console.log(k)

