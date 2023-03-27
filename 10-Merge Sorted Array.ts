//https://leetcode.com/problems/merge-sorted-array/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i : number ;
    for( i =0; i<n; i++ ){
        nums1[m+i]=nums2[i]
    }
    nums1.sort((a,b)=> a-b)
   
   
}
