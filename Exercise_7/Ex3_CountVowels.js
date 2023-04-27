let s = "Life is beautiful, love yourself, believe yourself."
function countVowels(s) 
{  
    //"RegEx" pattern is used to get vowels along with match() method 
   let c = s.match(/[aeiou]/gi).length;
   return c;
}
//call countVowels function
console.log(countVowels(s))


/*
Explanation
Line 2: We initialize the string s and assign a value to it.
Line 5: We define the countVowels function, which accepts a string as a parameter and returns the count of the vowels present in that string.
Line 7: We will pass /[aeiou]/gi as a parameter to the match method, which checks and returns characters which are matching the pattern,/[aeiou]/gi, that is it returns an array of characters that are vowels.
Line 8: If no vowels are found we will get null so we check for null and return 0 else return the length of the array.
Line 12: We call the countVowels function and pass s as a parameter to it. We then print the returned value.
A Regular Expression (or Regex) is a pattern (or filter) that describes a set of strings that matches the pattern. In other words, a regex accepts a certain set of strings and rejects the rest.
*/


const vowels = ["a", "e", "i", "o", "u"]
function countVowels1(str) 
{
   let count = 0;
    for (let letter of str.toLowerCase()) 
    {
        if (vowels.includes(letter)) 
        {count++;}
    }
    return count;
}
let string = "We live in India";
let result = countVowels1(string);
console.log(result);
/*
In the above example,
All the vowels are stored in a vowels variable.
Initially, the value of the count variable is 0.
The for...of loop is used to iterate over all the characters of a string.
The toLowerCase() method converts all the characters of a string to lowercase.
The includes() method checks if the vowel variable contains any of the characters of the string.
If any character matches, the value of count is increased by 1.
*/



