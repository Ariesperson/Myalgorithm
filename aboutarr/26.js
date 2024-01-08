/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0){return 0;}
    let left = 0, right = 1;
    while(right < nums.length){
        if(nums[right] != nums[left]){
            left = left + 1;
            nums[left] = nums[right];
        }
        right = right + 1;
    }
    return left + 1;
};
const testcase = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(testcase)