// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].


function allLongestStrings(inputArray) {
let maxLength=0;
let longestStrings=[];
maxLength=Math.max(...(inputArray.map(el => el.length)));
inputArray.forEach((el)=>{
    if(el.length == maxLength){
        longestStrings.push(el);
    }
})
return longestStrings;
}

