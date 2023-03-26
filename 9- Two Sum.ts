//https://leetcode.com/problems/two-sum
function twoSum(nums: number[], target: number): number[] {

    let res: number[]=[] , i: number, len = nums.length;

    for(let i = 0; i< len ; i++){

       let first = nums[i], second = target-first;
       let idx = nums.indexOf(second)
       if(  idx > -1 && idx!= i ){
           res.push(i)
           res.push(idx)
        break;
          
       }
      
       
    }

    return res

};