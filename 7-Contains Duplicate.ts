//https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
    if (nums.length == 0) return false 
    nums = nums.sort()
    for(let i = 1; i < nums.length; i++){
        if ( nums[i]== nums[i-1]){
            return true;
        }
         
    }
    return false
    //const s = new Set(nums); return s.size !== nums.length
};