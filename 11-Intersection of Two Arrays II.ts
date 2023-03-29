//https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort()
    nums2.sort()
 
    const minNums : number[] = (nums1.length > nums2.length)? nums2 : nums1
    const secondNums = (minNums == nums1) ? nums2 : nums1;
     let i = 0, arr: number[] =[] , tmp:number
     for(i = 0; i< minNums.length;i++){
         let curNum = minNums[i];
 
         tmp = secondNums.indexOf(curNum)
         if( tmp> -1){
             arr.push(curNum)
             secondNums[tmp] = -1;
             
             
            
     }
    
 }
    
     return arr
 };
 
 