/* Write a function called sum that finds the sum from 1 to a number */

function sumTillNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
}

// call the function
num = 10;
console.log(sumTillNum(num)); // --> 45