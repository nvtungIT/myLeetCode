//https://leetcode.com/problems/running-sum-of-1d-array/description/


function runningSum(nums: number[], sum : number = 0): number[] {
    
    const result =  nums.map(num=> sum += num)
    return result
  };

  
  