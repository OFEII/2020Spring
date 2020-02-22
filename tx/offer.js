
const arr=[1, 3, 9, 6, 10, 7, 3, 3, 6, 20];
const set=[...new Set(arr.sort((a,b) => a-b))]
console.log(set)

var str = 'abc345efgabcab'

str = str.replace(/(\d)/g, "\[$1\]");
console.log(str)


function request(number) {
    const time = Math.random() * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number);
        }, time);
    }),console.log(number)
}
for (let i = 0; i < 10; i++) {
    request(i);
}

