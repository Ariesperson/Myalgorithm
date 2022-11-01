
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let node = head, n = 0;
    //找到链表的长度
    while (node) {
        node = node.next;
        n++;
    }
    node = head;
    //找到到处第k个节点 位置为n-k
    for (let index = 0; index < n-k; index++) {
        node = node.next;
    }
    return node
};