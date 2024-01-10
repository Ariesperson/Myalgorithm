/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 碰到这个问题我最先想到的是使用双指针方法
var strStr = function(haystack, needle) {
    let left = 0;
    let right = 0;
    for (let i = 0; left < haystack.length; i++) {
        left = i;
        if(haystack.length-left<needle.length) 
        {
            return -1;
        }
        while(right<=needle.length){
            if(haystack[left] === needle[right]){
                console.log(haystack[left])
                console.log(needle[right])
                left++;
                right++;
                if(right > needle.length-1)
                {
                    return i;    
                }
            }else{
                if(right > needle.length-1)
                {
                    return i;    
                }else{
                    right = 0;
                }
                break;
            }
        }
    }
}; 

var strStranswer = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    for (let i = 0; i + m <= n; i++) {
        let flag = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
const haystack = "a", needle = "a"
console.log(strStr(haystack,needle));