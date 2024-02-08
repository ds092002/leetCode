// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

/**
  @param {string} s
  @return {number}
 */
var firstUniqChar = function(s) {
    let result = {};
    for(let i=0;i<s.length;i++){
        if(!result[s[i]]){
            result[s[i]] = 1;
        }
        else{
            result[s[i]]++;
        }
    }
    for(let i=0;i<s.length;i++){
        if(result[s[i]] == 1 ){
            return i;
        }
    }
    return -1;
};