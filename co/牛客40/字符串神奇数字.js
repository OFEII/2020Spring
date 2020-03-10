function change( number ) {
    let arr = number.split('').map(e=>+e)
    let r = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 0){
            r.push(arr[i]) 
        }
        
    }
    r.reverse()
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 0){
            arr[i] = r.shift()
        }
    }  
    return arr.join('')
}
console.log(change("1675283134"))