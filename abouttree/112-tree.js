/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 * 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, sum) {
    //递归方法 （深度优先）
    //1.定义一个递归方法
    if (root == null) { // 遍历到null节点 
        return false;
    }                
    if (root.left == null && root.right == null) { // 遍历到叶子节点
        return sum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
    }
    // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val); 
};
// var haspathsum1 = function(root, targetsum) {
    
//     //递归方法 （深度优先）
//     const traversal = (node, cnt) => {
//         debugger
//         // 遇到叶子节点，并且计数为0
//         if (cnt === 0 && !node.left && !node.right) return true;
//         // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
//         if (!node.left && !node.right) return false;
    
//         //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
//         if (node.left && traversal(node.left, cnt - node.left.val)) return true;
//         //  右（空节点不遍历）  
//         if (node.right && traversal(node.right, cnt - node.right.val)) return true;
//         return false;
//     };
//     if (!root) return false;
//     return traversal(root, targetsum - root.val);

// };
// haspathsum1( [5,4,8,11,null,13,4,7,2,null,null,null,1],22)