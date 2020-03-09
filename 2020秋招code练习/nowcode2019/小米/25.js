const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 2){
        let n = inArr[0].split(' ')[0]
        let m = inArr[0].split(' ')[1]
        let arr = inArr[1].split(' ').map(e => +e)
        let s = 0
        let Max = Number.MIN_VALUE
        for (let i = 0; i < n; i++) {
            s += arr[i]
            Max = Math.max(Max, arr[i])
        }
        let l = Max, r = s, mid, cnt, t
        while (l<r) { //5 15
             mid = (l+r)/2 //10 ， 7 ，6 ， 5
             cnt = 1 //次数
             t = 0
             for (let i = 0; i < n; i++) {
                 if(t + arr[i] > mid){
                     cnt++
                     t=0
                 }
                 t += arr[i]
             }
             cnt>m ? l = mid+1 : r = mid //一共三次 //5 //r = 10 ， 7， 6
        }
        console.log(parseInt(l))
    }
})
  // 结果在（max(nums),sum(nums))之间，使用二分查找，
// 以[7,2,5,10,8]举例，开始假设只有一个子数组,set=1
// 第一个 mid = (10+32)/2=21, 然后把数字一个一个塞进去
// 先塞7, 7<21, 7+2<21, 7+2+5<21, 直到 7+2+5+10>21
// 意味着一个数组放不下, set+1=2, 然后把后面的塞完
// 如果比m大说明我们开的子数组太多, 也就意味值我们数组容量(mid)太小
// 所以我们就从[22,32]区间中找, 否则在[10,21]中找

 /**
     * 二分逼近法
     * 这个题的意思：假设存在数组 1 4 2 3 5 分割成 3 段，有几种分法呢，答案是 C4^2: 4*3/2*1 = 6 种，
     * 即在数组的四个间隔中插入两根柱子将其分成 3 段，每一种分法中会对应有 3 个子数组的值，其中最大的值即为当前分割方法的
     * 最大权值，在所有的分割方法中找出最小的一个最大权值，听起来好像有点绕口...
     * eg：1  |  4 2 | 3 5 这种分割方法，它的最大权值为 8 而： 1 4 | 2 3 | 5 分割方法，它的最大权值为 5
     *
     *
     * 思路：假设存在一个最大值的最小值 x,反过来划分数组。子数组的权值都比x要小，如果组数小于m，说明 x 还可以再小；
     * 组数大于m，说明 x 需要变大，以容纳更多的数。减小分组数。如果组数等于m，x也可能再小
     * 考虑边界情况，现在把每个元素分成一组，那么x的最小值就是数组中最大的值；把数组当成一个组，那么x就是数组元素之和。
     * 即 max(nums) <= x <= sum(nums)
     * 因为每一组都是连续的，只要每一组累加的和大于了x，那么当前元素就要放到下一组，记录有多少组即可。
     *
     * 我们通过二分逼近来确定这个x的值。
     * 在于这个“逼近”，这道题是在连续的数值范围中逼近，换句话说，每个组的和一定在范围之内，因此正确答案是不会被跳过的；
     */