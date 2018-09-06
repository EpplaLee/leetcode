/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (34.52%)
 * Total Accepted:    390.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict = {
      '}': '{',
      ')': '(',
      ']': '[',
    }
    let arr = s.split('')
    let stack = []
    for(let i = 0; i < s.length; i++) {
      if(/\(|\[|\{/.test(arr[0])) stack.unshift(arr.shift())
      if(/\)|\]|\}/.test(arr[0])) {
        if(dict[arr[0]] == stack[0]) {
          stack.shift()
          arr.shift()
        } else stack.push(arr.shift())
      }
    }
    return arr.length == 0 && stack.length == 0
};
