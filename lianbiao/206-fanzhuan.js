//翻转链表



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null //保存链表的上一个
    let curr = head //保存当前链表
    while(curr){
       const next = curr.next  // 先保存链表的下一个节点
       curr.next = prev //将当前链表的next一个指向他的上一个
       prev = curr // 再上一个节点变为当前节点
       curr = next  // 将当前节点变为下一个节点
    }
    return prev;
};
// 1 2 3 4 5
// 2.next=1 1.next = null 2.prev=1
// 3.next=2 
// 2.next=3