// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var mypermute = function(nums) {
    let result  = [];
    function getpath(nums,prepath){
        console.log(prepath)
        let path = [...prepath] || []
        nums= [...nums]
        if(nums.length==0){
           return result.push(path) 
        }
        for (let index = 0; index < nums.length; index++) {
            // let data = 
            let source = [...nums]
            let a = source.filter((x)=>x!=nums[index])
            let b = [...path.concat(nums[index])]
            getpath(a,b)
        }
    }
    getpath(nums,[])
    return result
};

mypermute([1,2,3,4])
var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;
    
    function backtracking(n, k, used) {
        if(path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++ ) {
            if(used[i]) continue;
            path.push(n[i]);
            used[i] = true; // 同支
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
        }
    }
};
permute
