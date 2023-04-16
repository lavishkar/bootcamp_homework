let s = "Life is beautiful, love yourself, believe yourself."
function countVowels(s) 
{  
    //"RegEx" pattern is used to get vowels along with match() method 
   let c = s.match(/[aeiou]/gi).length;
   return c;
}
//call countVowels function
console.log(countVowels(s))