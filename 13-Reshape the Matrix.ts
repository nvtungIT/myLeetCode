function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  

    const firstRows = mat.length
    const firstColumns = mat[0].length
    const isAbleToReshape = (firstRows * firstColumns == r * c) ? true : false 
    let flatList : number[] = []
    let res: number[][] = [] 

    let idx = 0
    

    if (!isAbleToReshape){
        return mat
    } 

    else {

        for(let i = 0 ; i < firstRows ; i ++){
            for( let j = 0; j < firstColumns ; j ++){
                flatList.push(mat[i][j])
            }
        }

        for( let i = 0 ; i < r ; i++){
             let sliceFlatList : number[] = flatList.slice(idx , idx + c );
             res.push(sliceFlatList)
             idx+=c;
            
            
        }
    }


    return res
};