
function checkPalindrome(inputString) {

    const stringArray = inputString.split("");
    const lengthOfArray=stringArray.length;
    const midpoint=Math.floor(lengthOfArray/2);
    console.log("MidPoint:", midpoint);

if(lengthOfArray==1){
    return true;
}

    for (let i = 0; i < midpoint + 1; i++){
        console.log("i:", i, "part1 value:",stringArray[i],"-- part2 value:",stringArray[lengthOfArray-i -1] );
    if(stringArray[i] != stringArray[lengthOfArray-i -1]){
        return false;
    }
    
}
return true;

}

//incorrect solution wrong approach
// function checkPalindrome(inputString) {

//     const stringArray = inputString.split("");
//     console.log("String array =", stringArray);
// const lengthOfArray=stringArray.length;
// let part1=[];
//     // let part2 = [];
//     console.log(lengthOfArray % 2,"Size: ",lengthOfArray );
//     if (lengthOfArray % 2) {
//         console.log("ODD array length");
//     const midpoint=Math.floor(lengthOfArray/2);
//         part1 = stringArray.splice(0, midpoint);
//     // part2=stringArray.splice(midpoint + 1,lengthOfArray)
//         part1.forEach((e, index) => {
//             console.log("index: ", index);
//             console.log("part1 element: ", e, "part2 index:", lengthOfArray - index-1, "part2 value:", stringArray[lengthOfArray - index-1]);
//             if (e != stringArray[lengthOfArray - index ]) {
//                 console.log("they are not the same");
//             return false
//         }
//     })
//     return true;
// }
// else
//     {
//         console.log("Even array length")
//     if(lengthOfArray==1){
//         return true;
//     }
//     const midpoint=Math.floor(lengthOfArray/2);
//         part1 = stringArray.splice(0, midpoint);
//         part1.forEach((e, index) => {
//             console.log("index: ", index);
//             console.log("part1 element: ", e, "part2 index:", lengthOfArray - index-1, "part2 value:", stringArray[lengthOfArray - index -1]);

//             if (e != stringArray[lengthOfArray - index - 1]) {
//                             console.log("they are not the same");

//             return false
//         }
//     })
//     return true;
// }

// }


console.log("Palindrome Results: ",checkPalindrome("abac"));