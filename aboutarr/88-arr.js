//合并两个有序数组

// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

let nums1 = [1,2,3,0,0,0] ,nums2 = [2,5,6], n = 3
// let result = []
var merge = function(nums1, m, nums2, n) {
    let temp = nums1.length-m
    //移除空项
    for(let k = 0;k<temp;k++){
        nums1.pop()
    }
    //放入
    for(let i = 0;i<n;i++){
        nums1[m+i]=nums2[i]
    }
    //排序
    nums1.sort((a,b)=>a-b)
};
merge(nums1,3,nums2,3)
