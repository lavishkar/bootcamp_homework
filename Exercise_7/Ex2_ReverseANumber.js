

function number()
{
    let result = 0;
    let number = 123456789;    
    //Number method is used and inside 1st number is converted into string, then its split, then reversed, then all joined together.
    result = Number(String(number).split('').reverse().join(''));    
    return ("Reversed number is : "+result);
}
console.log(number());


/*Numbers can be reveresed in 4 ways. Using:
    1.Algorithm:
        Algorithm works on the removal of the last digit of the number, and that last digit can be appended to the right of a new value.
    2.Converting number to string: Needs 3 methods to be used one by one as below.
         1) split()
         2) reverse()
         3) join()
    3.Arrow function: 
        In this we can handle the case of reversing a negative number by explicitly checking the sign on the given number.
    4.Regular function.
The only difference between the Arrow Function and the Regular Function is that the Regular Function requires a return value, 
while the  Arrow functions have an implicit return value, and the value is returned according to the statements.
    */