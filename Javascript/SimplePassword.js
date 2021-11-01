/*
Simple Password
Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. 
For example: if str is "apple!M7" then your program should return "true".
Examples
Input: "passWord123!!!!"
Output: false
Input: "turkey90AAA="
Output: true
*/

function SimplePassword(str) { 
    // code goes here
  
    // 1. It must have a capital letter.
    const CheckCaptialLetter = /(?=.*[A-Z])/;
    if(!str.match(CheckCaptialLetter)) return false;
  
    // 2. It must contain at least one number.
    const CheckOneNumber = /(?=.*\d)/;
    if(!str.match(CheckOneNumber)) return false;
  
    // 3. It must contain a punctuation mark or mathematical symbol.
    const CheckPOrMsymbol = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if(!str.match(CheckPOrMsymbol)) return false;
  
    // 4. It cannot have the word "password" in the string.
    const CheckPasswordKeywordRegex = /password/i;
    if(str.match(CheckPasswordKeywordRegex)) return false;
  
    // 5. It must be longer than 7 characters and shorter than 31 characters.
    const CheckLengthRegex = /^.{7,31}$/;
    if(!str.match(CheckLengthRegex)) return false;

    return true; 
}

let string1 = "passWord123!!!!"; // Input: "passWord123!!!!"
console.log(SimplePassword(string1)); // Output: false

let string2 = "turkey90AAA="; // Input: "turkey90AAA="
console.log(SimplePassword(string2)); // Output: true
