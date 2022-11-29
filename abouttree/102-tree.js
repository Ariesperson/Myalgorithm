/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *  102 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//
 var levelOrder = function(root) {
    // 问题 是怎么把这个二叉树按层级展平， 那肯定是按照广度优先遍历
    let res = [];
    if(root === null) return res;
    let list = [];
    list.push(root);//将根结点放进来
    while(list.length) {//
        let curLen = list.length;//上一轮剩下的节点，全属于下一层
        let newLevel = [];
        for(let i = 0; i < curLen; i++) {//同层所有节点
            let node = list.shift();//shift拿出第一个
            newLevel.push(node.val);//push进newLevel数组
            //左右子节点push进队列  将下一层的节点放心去
            if(node.left) list.push(node.left);
            if(node.right) list.push(node.right);
        }
        res.push(newLevel);//push到res数组
    }
    return res;
};
// 
var levelOrder = function(root) {
    var res = []
    let list = []
    list.push(root)
    while(list.length){
        let newLevel = [];
        for (let index = 0; index < list.length; index++) {
            let node = list.shift()
            newLevel.push(node.val)
            if(node.left)
            list.push(node.left)
            if(node.right)
            list.push(node.left)
        }
        res.push(newLevel)
    }
}