let line,
    obj = {},
    max = null,
    min = null

while(line = readline()){
    let val = parseInt(line)
    if(obj[val]){
        delete obj[val]
    }else{
        obj[val] = 1
    }
}

for(let key in obj){
    key = parseInt(key);
    if(!max){
        max = key
        min = key
    }else if(key > max){
        max = key
    }else{
        min = key
    }
}
print(min + " " + max)