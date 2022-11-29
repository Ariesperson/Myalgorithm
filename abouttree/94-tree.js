/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//二叉树的中序遍历：按照访问左子树——根节点——右子树的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，我们可以直接用递归函数来模拟这一过程。
// 即递归逻辑上优先处理left节点,然后是root.val,然后是right

var inorderTraversal = function(root) {
    let res = []
    function orderdeep(root){
        if (!root) {
            return;
        }
        orderdeep(root.left)
        res.push(root.val)
        orderdeep(root.right)

    }
    orderdeep(root)
    return res
};