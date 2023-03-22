//https://leetcode.com/problems/fizz-buzz/description/

function fizzBuzz(n: number): string[] {
    const arr: string[]=[]

    function changeArray(value: number): string{
        if(value%15==0){
            return "FizzBuzz"
        }
        else {
            if(value% 3==0) return 'Fizz'
            if(value%5==0) return 'Buzz'
            else return value.toString()
        }
        
    }
    for(let i = 1; i<= n;i++){
         arr.push(changeArray(i))
    }
    return arr;

};