// Product Series / Pi notation
// Multipling from 1 to end amount 
// 1 * 2 * 3 * ... * n = n!   
/*
0! = 1
1! = 1
2! = 2 * 1 = 2
*/

function factorial(n) {
    if (n == 0) {
        return 1; 
    } else {
        return n * factorial(n-1);
    }
}

console.log(facotrial(0)); // = 1 
console.log(factorial(1)); // = 1
console.log(factorial(2)); // = 2
console.log(factorial(3)); // = 6
console.log(factorial(4)); // = 24
console.log(factorial(5)); // = 120 