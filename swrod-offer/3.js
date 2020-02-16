// 3题目描述 从尾遍历列表
// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function  printListFromTailToHead(head) {
    var arr = []
    while (head!=null) {
        arr.unshift(head.val)
        head = head.next
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

    }
    return arr
    
}