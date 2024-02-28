/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //二叉树的层序遍历
    let res=[],queue=[];
    queue.push(root);
    if(root===null){
        return res;
    }
    //自顶向下
    while(queue.length!==0){
        // 记录当前层级节点数
        let length=queue.length;
        //存放每一层的节点 
        let curLevel=[];
        for(let i=0;i<length;i++){
            //出栈根节点
            let node=queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点  从左向右遍历
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    // 自地向上
    return res.reverse();
};
