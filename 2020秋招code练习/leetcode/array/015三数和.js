var threeSum = function(arr) {
    let res
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = i+1; j < arr.length-1; j++) {
            for (let k = 0; k < arr.length; k++) {
                if(arr[i]+arr[j]+arr[k] == 0){
                    res.push([arr[i],arr[j],arr[k]])
                }
                
            }
            
        }
        
    }
    return res
    
};