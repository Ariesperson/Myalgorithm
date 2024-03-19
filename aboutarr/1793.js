/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 贪心算法思想。每一次取最大值，那么
 * 以为很难，其实并不难，是一道贪心题，主要分析怎么贪心.

最大分数：ans = 子数组内最小值 *（right - left + 1） 要求：必须包含nums[k]，那么找出的包含nums[k]的子数组的最小值一定 小于等于k，是递减的；那么能够贪的就是数组长度了，所以 针对每个子数组最小值寻找最大长度就成为贪心目标了。

那么就以 下标为 k 为起始，同时向俩边寻找比nums[k]小的值，选择俩个值中的较大值作为新的子数据最小值，因为是子数据最小值从大到小递减的，所以数组长度是一直递增的，并且包含之前的数组。
 */
var maximumScore = function(nums, k) {
    let n = nums.length;
    //双指针指向k的左右为初始值
    let left = k-1, right = k+1;
    let ans = 0;
    let minNum = nums[k];
    // while(left>=0 || right<n){
    //     minNum = Math.min(minNum,nums[left])
    //     minNum = Math.min(minNum,nums[right])
    //     ans = Math.max(ans,(right-left-1)*minNum)
    //     if()
    //     left --;
    //     right ++;
    // }
    for(let i = nums[k];;--i){
        while(nums[left]>=i && left>=0){
            left--
        }
        while(nums[right]>=i && right<n){
            right++
        }
        ans = Math.max(ans,(right-left-1)*i)
        if(left<=0&&right>=n){
            break
        }
    }
    return ans;
};
maximumScore([1,4,3,7,4,5],3)
maximumScore([5,5,4,5,4,1,1,1],0)