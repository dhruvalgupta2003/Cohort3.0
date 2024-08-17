// function to calculate sum of two no
function sumOfTwoNums(num1, num2){
    return num1 + num2;
}


let result = sumOfTwoNums(2,3);
console.log(result); // Output: 5


// function to calc sum from 1 to n

function sumOfN(n){
    let sum = 0;
    for(let i = 1; i<n; i++){
        sum += i;
    }
    return sum
}

let sumTillN = sumOfN(10);
console.log(sumTillN); // Output: 45