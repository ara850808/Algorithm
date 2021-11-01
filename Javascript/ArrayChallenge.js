/*
Array Challenge

Have the function ArrayChallenge(strArr) read the array of strings stored in strArr which will contain only two elements, 
both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], 
then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. 
For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). 
Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.
Examples
Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
Output: 7-4-6-10-6
Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
Output: 3-3-6-2
*/

function ArrayChallenge(strArr) { 

    // code goes here 
    let maxlength = 0;
    const Arr1 = strArr[0].replace('[', '').replace(']', '').split(',')
    const Arr2 = strArr[1].replace('[', '').replace(']', '').split(',')
    Arr1.length > Arr2.length ? maxlength = Arr1.length : maxlength = Arr2.length 
    
    let arrayChallengeResult = "";
    for (i=0; i<maxlength; i++){    
      if(Arr1[i] === undefined) Arr1[i] = 0;
      if(Arr2[i] === undefined) Arr2[i] = 0;
      
      arrayChallengeResult += String(parseInt(Arr1[i]) + parseInt(Arr2[i]))    
      arrayChallengeResult += "-"
    }
    
    return arrayChallengeResult.substring(0, arrayChallengeResult.length - 1)
  
}

let strArr1 = ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]; // Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
console.log(ArrayChallenge(strArr1)) // Output: 7-4-6-10-6

let strArr2 = ["[1, 2, 1]", "[2, 1, 5, 2]"] // Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
console.log(ArrayChallenge(strArr2)) // Output: 3-3-6-2
  