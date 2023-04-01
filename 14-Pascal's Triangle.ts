//https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {

    let res: number[][] = [[1],[1,1]]
   
    if (numRows == 1){
        return [[1]];
    }
    if(numRows == 2){
        return [[1],[1,1]]
    }

    for(let i = 2 ; i < numRows; i++){
        let curr_arr: number[] = []
        for(let j = 0 ; j < i-1 ; j++){
            let curr_num = res[i-1][j] + res[i-1][j+1]
            curr_arr.push(curr_num)
            
        }
        curr_arr.push(1)
        curr_arr.unshift(1)
        res.push(curr_arr)
    }

    return res
    
};