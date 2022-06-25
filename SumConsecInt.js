// adding consecutive integers 
// adding from 1 + 2 + ... + n 
// n(n+1) * 1/2 

function summation(input) {
    return input * (input + 1) / 2;
}

console.log(summation(1)); // = 1
console.log(summation(2)); // = 3
console.log(summation(3)); // = 6
console.log(summation(4)); // = 10
console.log(summation(5)); // = 15
console.log(summation(6)); // = 21
console.log(summation(7)); // = 28