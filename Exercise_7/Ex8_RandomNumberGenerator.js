function genRandom(min,max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
 }
console.log(genRandom(0,5)+" =Returns\ing random number including minimum and excluding the maximum number in the given range.");

function genRandom(min,max)
{
    return Math.floor(Math.random() * (max - min+1) ) + min;
}
console.log(genRandom(0,5)+" =Returns\ing random number including both minimum and maximum number in the given range.");