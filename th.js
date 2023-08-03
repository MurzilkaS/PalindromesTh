/*
Palindrome
Declare a function isPalindrome(str) that takes a string as an input.

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.*/
// Lowercase the string and use the RegExp to remove unwanted characters from it
 //Create the FOR loop
 // As long as the characters from each part match, the FOR loop will go on
// When the characters don't match anymore, false is returned and we exit the FOR loop
//Both parts are strictly equal, it returns true => The string is a palindrome


function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("My age is 0, 0 si ega ym."));



/*For this solution, we will use several methods:
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");
  */