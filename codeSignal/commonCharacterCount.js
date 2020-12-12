// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {
let count=0;
//& s1.indexOf(s1[i])==i
for(let i=0;i<s1.length;i++){
    if(s2.includes(s1[i]) ){
        count++;
        console.log(s2);
        console.log("Found s1 character:",s1[i],"at ",s2.indexOf(s1[i]),"in s2!");
        // s2.removeCharAt(s2.indexOf(s1[i]));
                // s2[s2.indexOf(s1[i])]="";
        s2 = remove_character(s2, s2.indexOf(s1[i]));
        console.log(s2);
        console.log("count:", count);
    }
}
return count;
}

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}


let s1 = "aabcc";
let s2 = "adcaa";

console.log("Result:", commonCharacterCount(s1, s2));

