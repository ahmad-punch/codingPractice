// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

// [output] string

// Return inputString, with all the characters that were in parentheses reversed.


function reverseInParentheses(inputString) {

return recursiveCheck2(inputString);

}

function recursiveCheck2(inputString){
    let a="(";
let b=")";
    if (inputString.includes(a)) {
        let substr=inputString.slice(inputString.indexOf(a)+1,inputString.length);
        console.log("substr: ", substr);

    if(substr.includes(a)){
        
         inputString=inputString.replace(substr, recursiveCheck2(substr));
    } else {
        let substrWithParantheis=substr.slice(0,inputString.indexOf(b)+2);
                                console.log("substrWithParantheis: ", substrWithParantheis);

        let substr2 = substrWithParantheis.slice(0, substrWithParantheis.length-1);
                                        console.log("substr2: ", substr2);

        reverseSubstr=substr2.split("").reverse().join("");
        inputString=inputString.replace(`(${substrWithParantheis}`, reverseSubstr);
                        console.log("reverseSubstr: ", reverseSubstr);
                console.log("inputString: ", inputString);

        
    }
return inputString;
}
else{
     return inputString;
}
}
a = "(bar)";
b = "foo(bar)baz(blim)";
console.log(reverseInParentheses(b));


//fails after simple test cases specifically on b.
function recursiveCheck1(inputString){
    let a="(";
let b=")";
    if (inputString.includes(a)) {
        let substrWithParantheis=inputString.slice(inputString.indexOf(a),inputString.lastIndexOf(b)+1);
        
        let substr = substrWithParantheis.slice(1, substrWithParantheis.length-1 );
                console.log("substrWithParantheis: ", substrWithParantheis);
        console.log("substr: ", substr);

    if(substr.includes(a)){
            recursiveCheck(substr);
    }else{
        reverseSubstr=substr.split("").reverse().join("");
        inputString=inputString.replace(substrWithParantheis, reverseSubstr);
                        console.log("reverseSubstr: ", reverseSubstr);
                console.log("inputString: ", inputString);

        
    }
return inputString;
}
else{
     return inputString;
}
}




