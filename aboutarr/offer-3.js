/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(map.has(element)){
            return element
        }else{
            map.set(element,element)
        }
    }
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))