/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let arr=[]
    let node = pHead
    while(node){
        arr.unshift(node)
        node = node.next
    }
    arr.forEach((el,index) =>{
        if(index !== arr.length - 1){
            el.next = arr[index+1]
        }else{
            el.next = null
        }
    })
    return arr[0]
}