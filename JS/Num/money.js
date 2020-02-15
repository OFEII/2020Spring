// function format(str) {
//     let s = ''
//     let count = 0
//     for (let i = str.length - 1; i >= 0; i--) {
//       s = str[i] + s
//       count++
//       if (count % 3 == 0 && i != 0) {
//         s = ',' + s
//       }
//     }
//     return s
//   }

function formatplus(num){
  let s = num.split('.')
  let s1 = s[0],s2=s[1]
  s2 = reverse(format(reverse(s2)))
  let res = format(s1)+'.'+format(s2)
  return res
}
  function format(str) {
    return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }

  function reverse(s){
    return s.split('').reverse().join('')
  }
  
console.log(formatplus('0.000123'))

  function emoney(num) {
      return num.toLocaleString('en-US');
    }
    
    

  