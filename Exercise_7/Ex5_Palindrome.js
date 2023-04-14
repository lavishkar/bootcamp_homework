function checkPalindrome(str)   
{   
    const len = str.length;    
    for (let i = 0; i < len / 2; i++) 
    {  
        if (str[i] !== str[len - 1 - i]) 
        {  
          return( 'It is not palindrome'); 
        }  
    }  
    return( 'It is a palindrome');  
}    
const string = "malayalam"; 
const value = checkPalindrome(string);
console.log(value);  