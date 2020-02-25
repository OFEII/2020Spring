// 使用归并排序中，对数组的部分进行归并时的过程，进行递增过程，将复杂度,从O(n*n)优化到O(nlgn), 因为使用了统一的辅助数组，空间复杂度为O(n)
// console.log(reversePairs([2,1]))

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 4){
        let n = +inArr[0]
        let m = +inArr[2]
        let nArr= inArr[1].split(' ').map(e=> +e)
        let mArr= inArr[3].split(' ').map(e=> +e)
        let reverseSplit = []
        let res =[]
        let splitRes=[]
        for (let i = 0; i < mArr.length; i++) {
            reverseSplit[i]=(Math.pow(2,mArr[i]))
        }
        for (let j = 0; j < reverseSplit.length; j++) {
            res[0] = reverseKGroup(nArr,reverseSplit[0])
            // splitRes[j]=res[k]
            
            
        }
        console.log(res)
        console.log(reverseSplit)
        console.log(nArr)
        console.log(mArr)
    }
})
var reverseKGroup = function(head, k) {
    let p = head, arr = [], resultArr = [], index = 0
    if (k < 2) {
        return head
    }
    while (p) {
        arr.unshift(p)
        p = p.next
        if (++index === k) {
            resultArr = resultArr.concat(arr)
            index = 0
            arr = []
        } else if (!p) {
            resultArr = resultArr.concat(arr.reverse())
        }
    }
    return resultArr[0] || head
}
console.log(reverseKGroup([1,2,3,4,5],2))

var reversePairs = function(nums) {

    let ret = 0,l = nums.length
    if(l == 0) return 0
    let help = new Array(l) // 统一的辅助数组
    var mergeSort = function(low,high){
        if(low >= high) return 
        let mid = (low+high) >> 1
        mergeSort(low,mid)
        mergeSort(mid+1,high)
        merge(low,mid,high)
    }
    
    var merge = function(low,mid,high){
        let l = low , r = mid + 1 , index = 0
        while(l<=mid && r<=high){
            if(nums[l]<=nums[r]){
                help[index++] = nums[l++]
            }else{
                help[index++] = nums[r++]
                ret += (mid - l + 1) // 关键算法，例如5,6和3,4,8，在处理到4时
                // 那么5,6和4分别构成一对逆序对
                // 在整个排序过程中，归并过程会处理到所有的数的相对关系，因而
                // 这一计算方法会计算出所有的逆序对个数
            }
        }
        while(l<=mid){
           help[index++] = nums[l++] // 尾确认处理，处理剩余的排序数组
        }
        while(r<=high){
            help[index++] = nums[r++]
        }
        for(let i = low ; i <= high ;i++){
            nums[i] = help[i-low] // 将排序完的辅助数组的部分付给待排数组，完成排序
        } 
    }
    
    mergeSort(0,nums.length-1)
    return ret
    }