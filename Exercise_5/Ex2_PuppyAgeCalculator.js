
function calculateDogAge(x,y)
{
    let humanage = x;
    let dogage = y;
    let humantodogage  = x/7;
    let dogtohumanage = y*7;

    return ("Your puppy is "+humantodogage+"years old in Dog Age & "+dogtohumanage+"years old in Human Age.")
}

console.log (calculateDogAge(14,3))
console.log (calculateDogAge(7,1))
console.log (calculateDogAge(21,2))