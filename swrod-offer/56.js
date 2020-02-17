// 56 删除链表中重复的结点
// 题目描述：
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

// 方法一： 
// 1.因为链表是单向的，如果是第一个、第二个节点就重复的话，删除就比较麻烦。因此额外添加头节点来解决
// 2.因为重复的节点不一定是重复两个，可能重复很多个，需要循环处理下。
function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    // write code here
    let head = new ListNode(0)
    head.next = pHead
    let pNode = head
    let pCur = head.next
    while (pCur !== null) {
        if (pCur.next !== null && pCur.val === pCur.next.val) {
            while (pCur.next !== null && pCur.val === pCur.next.val) {
                pCur = pCur.next
            }
            pNode.next = pCur.next
            pCur = pCur.next
        } else {
            pNode = pNode.next
            pCur = pCur.next
        }
    }
    return head.next
}


// 方法二：（递归）
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    if (pHead === null) return null
    if (pHead !== null && pHead.next === null) return pHead
    let pCur = null
    if (pHead.val === pHead.next.val) {
        pCur = pHead.next.next
        while (pCur !== null && pCur.val === pHead.val) {
            pCur = pCur.next
        }
        return deleteDuplication(pCur)
    } else {
        pCur = pHead.next
        pHead.next = deleteDuplication(pCur)
        return pHead
    }
}
