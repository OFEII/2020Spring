#!/usr/bin/env node
const buff = [];

function flatten(arr) {
    return arr.toString().split(",").map(item => +item)
    
  // TODO
}


process.stdin.on('data', (data) => {
    buff.push(data)
});

process.stdin.once('end', () => {
    const input = Buffer.concat(buff).toString('UTF-8');
    
    const res = flatten(JSON.parse(input));

    console.log(res);
});