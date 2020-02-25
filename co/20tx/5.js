var minTaps = function(n, ranges) {
    for (let i = 0; i < ranges.length; ++i) {
        const left = i - ranges[i] > 0 ? i - ranges[i] : 0;
        const right = i + ranges[i] < n ? i + ranges[i] : n;
        right > ranges[left] && (ranges[left] = right);
      }
      let count = 1;
      let cur = next = ranges[0];
      for (let i = 1; i < ranges.length; ++i) {
        if (i > next) return -1;
        if (i > cur) { cur = next; ++count; }
        ranges[i] > next && (next = ranges[i]);
      }
      return count;
    
};
let n=6
let arr = [3,6,2,4,0,2,4,7]
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]-n
    
}
console.log(arr)
console.log(minTaps(n,arr))