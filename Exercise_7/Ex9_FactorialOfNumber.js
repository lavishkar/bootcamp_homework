function numFactorial(n)
{
    if(n < 0)
        return "The Number has to be positive to calculate factorial of it.";
    else if(n == 0 )
        return 1;
    else
     return (n * numFactorial(n-1));
    
}
let n = 5;
answer = numFactorial(n);
console.log("The factorial of " + n + " : " + answer); 