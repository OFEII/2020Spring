let n = +readline().split('')[0]
let m = +readline().split('')[1]
let box = readline().split(' ').map(d=>+d)
let key = readline().split(' ').map(d=>+d)
let cnt =0
for (let i = 0; i < box.length; i++) {
    for (let j = 0; j < key.length; j++) {
        let sum = box[i]+key[j]
        if(sum%2 !== 0){
            cnt++;
            box.splice(i, 1, 0)
            key.splice(j, 1, 0)
        }
        
    }
    
}
print(cnt)