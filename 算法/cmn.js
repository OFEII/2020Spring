function rp(arr, count) {
    var result = [];
    var cal = function(r, a, c) {
        if (c == 0) {
            result.push(r);
            return;
        }
        for (var i = 0; i < a.length; i++) {
            cal(r.concat(a[i]), a.slice(0, i + 1).concat(a.slice(i + 1)), c - 1);
        }
    };
    cal([], arr, count)
    return result
}
 
function run() {
    var r = rp(['A','B','C','D'], 2);
    console.debug(r);
    console.debug(r.length);
}