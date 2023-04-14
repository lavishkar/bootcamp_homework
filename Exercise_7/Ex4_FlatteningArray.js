function flattenArr()
{
    let arr= [["Standards",6,7,8,9,10],["Subjects","Maths","Science","ComputerScience","Language"]];
    let flattened = [].concat.apply([], arr);
    return(arr.flat());
}
console.log(flattenArr());

/* There are 4 ways to flatten a 2D/3D/.... arrays
   1)Con() and apply(), like store in a variable = [].concat.apply([], arr)
   2)Spread operator, like store in a variable =  [].concat(...arr)
   3).reduce() 
   4)the easiest is using = arrayname.flat() 
*/
