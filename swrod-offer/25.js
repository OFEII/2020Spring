// 25 复杂链表的复制
// 题目描述：
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

// 用map来保存<N，N`>，这样就很容易设置p.random了，比如我们在节点S处和节点S`处，我们通过S可以得到N，那么<N，N`>对应，就可以就可以使得S`的next指向N`了。这是通过空间换时间
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    // write code here
    if (pHead === null) return null
    const map = new Map()
    var p1 = pHead
    var p2 = new RandomListNode(pHead.label)
    var pHead2 = p2
    while (p1) {
        if (p1.next) p2.next = new RandomListNode(p1.next.label)
        else p2.next = null
        if (p1.random) p2.random = new RandomListNode(p1.random.label)
        else p2.random = null
        p1 = p1.next
        p2 = p2.next
    }
    return pHead2
}