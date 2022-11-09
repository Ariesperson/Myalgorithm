/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    // let result = result%2
    if(nums[0]>target){
        return -1
    }
    if(nums[length-1]<target){
        return -1
    }
    // let result = result%2
    while(right>=left){
        let mid =Math.floor((right-left)/2)+left
        if(target==nums[mid]){
            return mid
        }else if(nums[mid]<target){
            //小于target  left右移
            left = mid+1
        }else if(nums[mid]>target){
            //大于target  right左移
            right = mid-1
        }
    }
    return -1
};