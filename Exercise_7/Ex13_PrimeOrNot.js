//A number is a prime if it is greater than 1 and divisible by only 1 and itself. 


function checkPrime1(num) 
{
  if (num<=1)
  {
    return false;
  }  
  for (let i= 2; i < num; i++) 
  {
   if (num % i === 0) 
   {
   return false;
    }
  }
  return true;
}
console.log(checkPrime1(-2)); //gives us a False answer
console.log(checkPrime1(1)); //gives us a True answer
console.log(checkPrime1(4)); //gives us a False answer
console.log(checkPrime1(8)); //gives us a False answer
console.log(checkPrime1(5)); //gives us a True answer


function checkprime2(num)
{
  if (num<=1)
  {
    return false;
  }  
  for (let i=2; i<=Math.sqrt(num); i++)
  {
    if (num%i === 0)
    {
      return false;
    }
  }
  return true;
}
console.log(checkPrime1(-2)); //gives us a False answer
console.log(checkPrime1(1)); //gives us a True answer
console.log(checkPrime1(4)); //gives us a False answer
console.log(checkPrime1(8)); //gives us a False answer
console.log(checkPrime1(5)); //gives us a True answer


