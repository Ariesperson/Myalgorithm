// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let rigtht = 1
    let sum = nums[left]+nums[rigtht]
    let result = nums.length
    if(nums[0]>=target||nums[nums.length-1]>=target){
        return 1
    }
    if(nums.length==1&&nums[0]<target){
        // console.log("最后的结果",0)
        return 0
    }
    while (left<nums.length-1) {
        // console.log("left的位置",left)
        // console.log("right的位置",rigtht)
        if(sum>=target){
            // console.log(sum)
            result= Math.min(rigtht-left+1,result)
            sum-=nums[left]
            left++;
            // rigtht=left+1
            // console.log("长度",result)
        }else{
            if(left==0&&rigtht==nums.length-1){
                return 0
            }
            if(rigtht==nums.length-1){
                return result
            }else{
                rigtht++
                sum+=nums[rigtht]
            }
        }
    }
    // console.log("最后的结果",result)
    return result
};
minSubArrayLen(7,[2,3,1,2,4,3])