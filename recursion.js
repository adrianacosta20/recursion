function factorial(){
    if(n<=1)return 1

    return n *factorial(value - 1)
}

function fibonacci(num) {
    if (num <= 2) return 2;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
// console.log(fibonacci(8))

function sumIt(n){
return (n<=1) ? 1 : n+(sumIt(n-1))}

// console.log(sumIt(4))

function sum3(n){
    // if(n<3) return 0
    // n=(n%3!==0) ? n-(n%3) : n
    // return n+sum3(n-3)
    return (n<3) ? 0 : (n%3!==0) ? sum3(n-(n%3)) : n + sum3(n-3)
}
console.log(sum3(10))