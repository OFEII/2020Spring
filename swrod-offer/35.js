// 35 数组中的逆序对（难）
// 题目描述：
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

// 输入描述: 题目保证输入的数组中没有的相同的数字
// 数据范围：
// 对于%50的数据,size<=10^4
// 对于%75的数据,size<=10^5
// 对于%100的数据,size<=2*10^5
// 示例1
// 输入1,2,3,4,5,6,7,0
// 输出7

// 第一反应是没思路，然后想到采用暴力解法,不过肯定会超时,所以我们需要用时间复杂度更低的解法.
// 说实话这道题有点难，我也是参考別人的。那么难点在哪呢？
// 难点一：要想到基于归并排序去解决。
// 难点二：参数的问题，这里很巧妙地用了一个copy数组作为data参数。
// 难点三：合并时，count如何计数。
// 不过只要注意这些小细节,多花点时间想明白还是能做出来的.
function InversePairs(data) {
    if (!data || data.length < 2) return 0;
    const copy = data.slice();
    let count = 0;
    count = mergeCount(data, copy, 0, data.length - 1);
    return count % 1000000007;
  }
  function mergeCount(data, copy, start, end) {
    if (start === end) return 0;
    const mid = end - start >> 1,
      left = mergeCount(copy, data, start, start + mid), // 注意参数，copy作为data传入
      right = mergeCount(copy, data, start + mid + 1, end); // 注意参数，copy作为data传入
    let [p, q, count, copyIndex] = [start + mid, end, 0, end];
    while (p >= start && q >= start + mid + 1) {
      if (data[p] > data[q]) {
        copy[copyIndex--] = data[p--];
        count = count + q - start - mid;
      } else {
        copy[copyIndex--] = data[q--];
      }
    }
    while (p >= start) {
      copy[copyIndex--] = data[p--];
    }
    while (q >= start + mid + 1) {
      copy[copyIndex--] = data[q--];
    }
    return count + left + right;
  }