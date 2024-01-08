//最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
  
    // 假设第一个字符串是最长公共前缀
    let prefix = strs[0];
    // 遍历字符串数组
    for (let i = 1; i < strs.length; i++) {
      // 当前字符串
      let currentStr = strs[i];
      console.log("currentStr",currentStr);
      
      // 检查当前字符串是否包含假设的前缀
      while (currentStr.indexOf(prefix) !== 0) {
        // 如果不包含，减少前缀的长度
        prefix = prefix.substring(0, prefix.length - 1);
        console.log("prefix",prefix)
        // 如果前缀为空，直接返回空字符串
        if (prefix === '') return '';
      }
    }
    // 返回最终的最长公共前缀
    return prefix;
  }
  let testcase = ["flower","flow","flight"]
  longestCommonPrefix(testcase)
