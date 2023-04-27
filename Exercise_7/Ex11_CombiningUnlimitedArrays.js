function addArrays1()
{
    let flowers = ["rose","jasmine","lotus"];
    let colours = ["red","white","violet","pink","yellow"];
    let places = ["Washington","NewJersey","Atlanda","London"];
    let names = ["Lavanya","Karthik","Ishanth"]
    let combined = [...flowers, ...colours, ...places, ...names];
    return combined;
}
console.log(addArrays1());

function addArrays2()
{
    let flowers = ["rose","jasmine","lotus"];
    let colours = ["red","white","violet","pink","yellow"];
    let places = ["Washington","NewJersey","Atlanda","London"];
    let names = ["Lavanya","Karthik","Ishanth"]
    let combined = flowers.concat(colours,places,names);
    return combined;
}
console.log(addArrays2()); 

/*The "Spread" parameter is same as the "Rest" but the spread parameter expands/spreads the an array into elements 
  (or)Spread parapemter is used for taking copy of an array.
  This is can be used when all elements from an object or array need to be included in a new array or object,
  or should be applied one-by-one in a function call's arguments list.
  And also the concat() method is another way to add unlimited arrays */

  


 
