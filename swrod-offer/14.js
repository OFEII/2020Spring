/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    let arr = []
    let node = head
    while(node){
        arr.unshift(node)
        node=node.next
    }
    return arr[k-1]
}