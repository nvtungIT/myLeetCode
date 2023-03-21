//https://leetcode.com/problems/richest-customer-wealth/
function maximumWealth(accounts: number[][]): number {

    let arr : number[] = []
    for(let i = 0 ; i < accounts.length; i++){
        arr.push(accounts[i].reduce((total,money)=> total + money))
    }
    const output = Math.max.apply(null,arr)
    return output
    
    }