/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.91%)
 * Total Accepted:    317.9K
 * Total Submissions: 996.1K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length == 0) return ''
  else if(strs.length == 1) return strs[0]
  let n = 0;
  while(n < strs[0].length) {
    for(let i = 0; i < strs.length - 1 ; i++) {
      if(strs[i][n] != strs[i + 1][n]) {
        return strs[0].slice(0, n)
      }
    }
    n++
  }
  return strs[0].slice(0, n)
};
