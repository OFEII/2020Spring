var ps = function(n) {
    let res = []
    helper(0, 0, n, '', res)
    return res
};

function helper (left, right, n, s, res) {
    if (left == n && right == n) {
        return res.push(s)
    }
    if (left < n) helper (left + 1, right, n, s + '(', res)
    if (right < left) helper (left, right + 1, n, s + ')', res)
}
console.log(ps(1))
console.log(ps(2))