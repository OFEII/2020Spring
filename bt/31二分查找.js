// 二分查找，递归实现
function binarySearch(tag,arr,start,end){
    let start = start||0
    let end = end || arr.length-1
    let mid = +(start+(end-start)/2)

    if(tag == arr[mid]){
        return mid
    }else if(tag > arr[mid]){
        return binarySearch(tag,arr,mid+1,end)
    }else{
        return binarySearch(tag,arr,start,mid-1)
    }
    return -1
}
function search(arr,key) {
    var low=0;
    var height=arr.length-1;
    var mid;
    while(low<=height){
        mid=Math.floor((low+height)/2); 
        if(arr[mid]==key){                
            return mid;
        }else if(arr[mid]<key){     
            low=mid+1;            
        }else{
            height=mid-1;
        }
    }
    return -1;
}

function search(arr,low,height,key){
    height--;
    if(low>height){
        return -1;
    }
    var mid=Math.floor((low+height)/2);
    if(arr[mid]==key){
        return mid;
    }else if(arr[mid]<key){
        low=mid+1
        return search(arr,low,height,key);
    }else{
        mid=height-1;
        return search(arr,low,height,key);
    }
}
   let arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86]
   console.log(search(arr,10)) // 9 返回目标元素的索引值  
