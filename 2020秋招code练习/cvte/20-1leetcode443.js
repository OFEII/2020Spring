var compress = function (s) {
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        let k = i;
        while (s[k] === s[k + 1]) k++;
        let sum = k - i + 1;
        ans += s[i] + (sum > 1 ? sum : '');
        i = k;
    }
    for (let i = 0; i < ans.length; i++) {
        s[i] = ans[i];
    }
    console.log(ans.split(''))
};

compress(["a","a","b","b","c","c","c","a","a","b","b","b"])
