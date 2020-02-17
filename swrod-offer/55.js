// 55 链表中环的入口结点
// 题目描述：
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

// 先看一个链表中环的相关定理：
// 给定一个单链表，只给出头指针h：
// 1、如何判断是否存在环？
// 2、如何知道环的长度？
// 3、如何找出环的连接点在哪里？
// 4、带环链表的长度是多少？
// ————————————————————————————
// 解法：
// 1、对于问题1，使用追赶的方法，设定两个指针slow、fast，从头节点开始，每次分别前进1步、2步。如存在环，则两者相遇；如不存在环，fast遇到NULL退出。并且碰撞点到头节点的距离为环中结点数n。
// 2、对于问题2，记录下问题1的碰撞点p，碰撞点p肯定是在环中的，从这个结点出发，一边移动一边计数，再次回到这个结点时就得到了环中结点数n。
// 3、问题3：有定理：碰撞点p到连接点的距离=头节点到连接点的距离，因此，分别从碰撞点、头节点相同速度开始走，相遇的那个点就是连接点。
// 　　该定理的证明如下： 设头节点到连接点的距离为x,连接点到碰撞点的距离为y，碰撞点到连接点的距离为z，环的长度为n，
// (1)碰撞点到头节点的距离为n,则有x+y=n
// (2)又因为环的长度为n,则有y+z=n
// (3)由(1)(2)可得z=x，也就是碰撞点p到连接点的距离=头节点到连接点的距离

// 4、问题3中已经求出连接点距离头指针的长度，加上问题2中求出的环的长度，二者之和就是带环单链表的长度

// 思路：
// 1.一快一慢指针，先找到碰撞点。
// 2.然后碰撞点到入口节点的距离就是头结点到入口节点的距离。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if (pHead === null) return null
    let pSlow = pHead
    let pFast = pHead
    while (pFast !== null && pFast.next !== null) {
        pSlow = pSlow.next
        pFast = pFast.next.next
        if (pSlow === pFast) {
            pFast = pHead
            while (pSlow !== pFast) {
                pSlow = pSlow.next
                pFast = pFast.next
            }
            return pFast
        }
    }
    return null
}
