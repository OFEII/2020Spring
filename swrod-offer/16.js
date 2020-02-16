// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 方法二：
// 不断地比较他们的头结点，谁大将谁取出到新链表表头(也有两种：递归和非递归)
// 递归
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    let newHead = null
    if(pHead1 === null) return pHead2
    if(pHead2 === null) return pHead1
    if(pHead1.val <pHead2.val){
        newHead = pHead1
        newHead.next = Merge(pHead1.next,pHead2)
    }else{
        newHead = pHead2
        newHead.next = Merge(pHead1,pHead2.next)
    }
    return newHead
}