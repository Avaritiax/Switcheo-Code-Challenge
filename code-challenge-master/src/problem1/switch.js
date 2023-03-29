//Loop
var sum_to_n_a = function(n) {
    // your code here
    if(n<=Number.MAX_SAFE_INTEGER)
    {
        let sum = 0
        for(let i=1;i<=n;i++)
        {
            sum+=i;
        }
        return sum;
    }
    else
    {
        console.log("Error")
    }
};
console.log(sum_to_n_a(100))
//Recursive
var sum_to_n_b = function(n) {
    // your code here
    if(n<=Number.MAX_SAFE_INTEGER)
    {
        if (n === 1) {
            return 1;
          } else {
            return n + sum_to_n_b(n - 1);
          }
    }
    else
    {
        console.log("Error")
    }
};
console.log(sum_to_n_b(100))
//Using the formula for the sum of an arithmetic series
var sum_to_n_c = function(n) {
    // your code here
    if(n<=Number.MAX_SAFE_INTEGER)
    {
        if (n === 1) {
            return 1;
          } else {
            return n + sum_to_n_c(n - 1);
          }
    }
    else
    {
        console.log("Error")
    }
};

console.log(sum_to_n_c(100))