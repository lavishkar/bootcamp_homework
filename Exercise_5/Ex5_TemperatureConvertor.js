function celsiusToFahrenheat(c)
{
    let celsius = c;
    let farenheat = (c*9/5)+32;
    //to convert celsius into fahrenheat f = c*9/5+32
    return ("The "+ c +" degrees Celsius temperature is "+farenheat+" degrees in Fahrenheat.");
}
console.log (celsiusToFahrenheat(5));

function fahrenheatToCelsius(f)
{
    let fahrenheat = f;
    let celcius = (f-32)*(5/9);
    //to convert fahrenheat into celsius c = f*5/9-32
    return ("The "+ f +" degrees Fahrenheat temperature is "+celcius+ " degrees in Celsius.");
}
console.log (fahrenheatToCelsius(20));