#!/usr/bin/env node
const buff = [];

function howManyDaysAreThereInFebruary(year) {
    var res 
    if(year%4 === 0 && year%100 !==0 || year%400 === 0){
        res = 29
    }else{
        res = 28
    }
    return res
    // TODO
}

process.stdin.on('data', (data) => {
    buff.push(data)
});

process.stdin.once('end', () => {
    const input = Buffer.concat(buff).toString('UTF-8');
    
    const res = howManyDaysAreThereInFebruary(input);

    console.log(res);
});