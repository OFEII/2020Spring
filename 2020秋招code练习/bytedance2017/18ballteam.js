// 有三只球队，每只球队编号分别为球队1，球队2，球队3，这三只球队一共需要进行 n 场比赛。现在已经踢完了k场比赛，每场比赛不能打平，踢赢一场比赛得一分，输了不得分不减分。已知球队1和球队2的比分相差d1分，球队2和球队3的比分相差d2分，每场比赛可以任意选择两只队伍进行。求如果打完最后的 (n-k) 场比赛，有没有可能三只球队的分数打平
function main(n, k, d1, d2) {
 
    var res = calcXYZ(k, d1, d2, 1, 1)
    if (test()) {
        return true
    }
    var res = calcXYZ(k, d1, d2, 1, -1)
    if (test()) {
        return true
    }
    var res = calcXYZ(k, d1, d2, -1, 1)
    if (test()) {
        return true
    }
 
    var res = calcXYZ(k, d1, d2, -1, -1)
    if (test()) {
        return true
    }
    return false
 
    function test() {
        if (res === false) return false
        var arr = [res.x, res.y, res.z]
        arr.sort(function(a, b) {
            return a - b
        })
        var min = arr[0]
        var mid = arr[1]
        var max = arr[2]
 
        var distance = max - min + max - mid
        var remain = n - k
        if ((remain - distance >= 0) && (remain - distance) % 3 === 0) {
            return true
        } else {
            return false
        }
    }
}
 
 
 
function calcXYZ(k, d1, d2, isXMoreThanY, isYMoreThanZ) {
    var x = y + isXMoreThanY * d1
    var y = (k + isYMoreThanZ * d2 - isXMoreThanY * d1) / 3
    var z = y - isYMoreThanZ * d2
 
    if (!isNotNegativeInteger(x) || !isNotNegativeInteger(x) || !isNotNegativeInteger(x)) {
        return false
    } else {
        return {
            x: x,
            y: y,
            z: z
        }
    }
}
//是否为非负整数 
function isNotNegativeInteger(num) {
    if (typeof(num) !== "number") return false
    if (num < 0) return false
    if (num % 1 !== 0) return false
    return true
}
 
var num = parseInt(readline())
for (var x = 0; x < num; x++) {
    var arr = readline().split(" ")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    var out = main(arr[0], arr[1], arr[2], arr[3])
    if (out) {
        console.log("yes")
    } else {
        console.log("no")
    }
}