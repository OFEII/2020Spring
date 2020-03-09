var findTheLongestSubstring = function(s) {
    if(s.length===0) return s
    let v = 'aeiou'
    let arr = s.split('')
    let l = 0
    let r = 0
    let max =0
    let res =''
    let win ={}

    // let v = [0,2,4,8,20]
    // 存储字母出现的次数  0 4 8 14 20
    let d = new Array(26).fill(0)
    for (let i of s) {
      d[i.charCodeAt()-97]++;
  }
  while(r<s.length){
    if(!win[s[r]]){
        win[s[r]] = true
        r++
    }else{
        while(l<r){
            delete win[s[l]]
            if(!isexist(s.substring(l++,r))){
                break
            }else if(!isexist(s.substring(l++,r++))){
                break
            }
        }
    }
    max = Math.max(max,r-l)
}
return max

};
function isexist(s) {
    let d = new Array(26).fill(0)
    for (let i of s) {
        d[i.charCodeAt()-97]++;
    }
    if(d[0]%2==0&&d[4]%2==0&&d[8]%2==0&&d[14]%2==0&&d[20]%2==0){
        return true
    }else{
        return false
    } 
}
console.log(findTheLongestSubstring("leetcodeisgreat"))
