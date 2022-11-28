/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//暴力解法
 var mergeTwoLists = function(list1, list2) {
    // let result = new ListNode()
    // while(list1&&list2){
    //     if(list1.val<list2.val){
    //         result.next = list1 //val1  next = undefined 1.next = 5 5.next =
    //         list1= list1.next
    //     }else{
    //         result.next=list1
    //         list1= list1.next
    //     }
    // }
};
//递归算法
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2;
    }
    if(list2 === null){
        return list1;
    }
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}