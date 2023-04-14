function addArrays()
{
    let flowers = ["rose","jasmine","lotus"];
    let colours = ["red","white","violet","pink","yellow"];
    let combined = [...flowers, ...colours];
    return combined;
}
console.log(addArrays());


/*The "Spread" parameter is same as the "Rest" but the spread parameter expands/spreads the an array into elements 
  (or)Spread parapemter is used for taking copy of an array.
  This is can be used when all elements from an object or array need to be included in a new array or object,
  or should be applied one-by-one in a function call's arguments list. */