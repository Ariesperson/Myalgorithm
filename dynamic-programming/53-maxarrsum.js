// 最大子数组和

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
//暴力解法
var maxSubArray1 = function(nums) {
    let result=null; let index = nums.length;
    //1.要找出nums里面的所有子数组
    for (let i = 0; i < nums.length;i++) {
        let temp = 0;
        let arr = [];
        for (let j = i; j <index; j++) {
            //2.计算所有子数组的和
            temp=temp+nums[j]
            if(index>i+1&&j==index-1){
                index--
                i--
            }
            if(index==i+1&&j==i){
                index=nums.length
                break;
            }
        }
        if(result===null){
            result=temp
        }else{
            result=temp>result?temp:result
        }
    }
    return result
};
//思路1  dp[i]的最大子集和只需要以dp[i-1]的最大子集和做比较就行  
var maxSubArray2 = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        // console.log(num)
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        // console.log(ans)
        //返回更大的一个值
        ans = Math.max(ans, sum);
    }
    console.log(ans)
    return ans;
}; 
//思路2  
function  maxSubArray3  ( nums ) {
    if (!nums.length) {
        return;
    };
    // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
    let max_ending_here = nums[0];
    let max_so_far = nums[0];

    for (let i = 1; i < nums.length; i ++ ) {
        // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

        max_ending_here = Math.max ( nums[i], max_ending_here + nums[i]);
        max_so_far = Math.max ( max_so_far, max_ending_here);
    };

    return max_so_far;
};
// 动态规划
var maxSubArray4 = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

maxSubArray2([-2, 1, -3, 4,-6, -1, 2, 1, -5, 4])