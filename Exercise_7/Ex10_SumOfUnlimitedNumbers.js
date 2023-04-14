function addNumber(...unlimiltedinputs) 
{
    let sum = 0;                        
    for (i of unlimiltedinputs)         
    {
        sum+=i;
    }
    return sum;
}
console.log(addNumber(1,2,3));
console.log(addNumber(1,2,3,4,5,6));
console.log(addNumber(9,4,7,8))
// the "Rest" parameter is used to collects multiple elements and "condenses" them into a single element. 
// for rest parameter "..." is used before the unliminted paramaters you want to use. 