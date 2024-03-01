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
 * @param {number} k
 * @return {number}
 * 
给你一棵二叉树的根节点 root 和一个正整数 k 。

树中的 层和 是指 同一层 上节点值的总和。

返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。

注意，如果两个节点与根节点的距离相同，则认为它们在同一层。
 */
var kthLargestLevelSum = function(root, k) {
    let q = [root];
    let levelSumArray = [];
    while (q.length > 0) {
        let levelSum = 0, size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            levelSum += node.val;
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        levelSumArray.push(levelSum);
    }
    if (levelSumArray.length < k) {
        return -1;
    }
    levelSumArray.sort((a, b) => b - a);
    return levelSumArray[k - 1];
};