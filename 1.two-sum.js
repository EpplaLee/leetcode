/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.77%)
 * Total Accepted:    1.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {}
  for(let i = 0; i < nums.length; i++) {
    let minus = target - nums[i];
    console.log(hash[minus])
    if( hash[minus] || hash[minus] === 0) {
      return [hash[minus], i]
    }
    hash[nums[i]] = i
  }
};
// 时间复杂度n，使用哈希

var twoSum = function(nums, target) {
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] + nums[j] === target) {
        return [j, i]
      }
    }
  }
};
// 时间复杂度n^2