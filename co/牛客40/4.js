function solve( a ) {
    let max = 0
    let cmnArr = cmn(a.trim(),4)
    for (let i = 0; i < cmnArr.length; i++) {
        max = Math.max(max, getArea(cmnArr[i]))
    }
    return max

    function getArea(arr){
        [a,b,c,d]=arr
        let s = (a+b+c+d)/2
        let area = Math.sqrt((s-a)*(s-b)*(s-c)*(s-d))
        return area.toFixed(5)
    }
    function cmn(m, n, currentIndex = 0, choseArr = [], cmnArr = []) {
        let mLen = m.length
            // 可选数量小于项所需元素的个数，则递归终止
        if (currentIndex + n > mLen) {
            return
        }
        for (let i = currentIndex; i < mLen; i++) {
            // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
            // debugger
            if (n === 1) {
                // 再增加一个元素就能生成一个完整项，再加入到结果集合中
                cmnArr.push([...choseArr, m[i]])
                // 继续下一个元素生成一个新的完整项
                i + 1 < mLen && cmn(m, n, i + 1, choseArr, cmnArr)
                break
            }
            // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
            cmn(m, n - 1, i + 1, [...choseArr, m[i]], cmnArr)
        }
        return cmnArr
    }
}


console.log(solve([1,2,3,4,5]))
