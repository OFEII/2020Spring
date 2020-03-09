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
// 有序的二分查找，返回-1或存在的数组下标。不使用递归实现。

function binarySearch(tag,arr){
    
    let mid = +(start+(end-start)/2)
    while(start <= end){
        if(tag === arr[mid]){
            return mid
        }else if(tag > arr[mid]){
            start = mid+1
        }
        else{
            end = mid-1
        }
    }
}