// Fibonacci Sequence 
// 0 | 1 | 2 | 3 | 4 | 5 | 6
// 0 | 1 | 1 | 2 | 3 | 5 | 8
// X(n) = X(n-1) + X(n-2)

// Recursion 
function fibonacci(n) {
    if(n < 2) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(0)); // = 0 
console.log(fibonacci(1)); // = 1
console.log(fibonacci(2)); // = 1
console.log(fibonacci(3)); // = 2
console.log(fibonacci(4)); // = 3
console.log(fibonacci(5)); // = 5