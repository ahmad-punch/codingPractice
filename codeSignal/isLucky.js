// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.


function isLucky(n) {

    let noOfDigits= Math.log(n) * Math.LOG10E + 1 | 0;  // for positive integers
    let leftSideSum=0,rightSideSum=0,temp=0,count=0;
    // for (let i = 1; i < noOfDigits / 2; i++){
    // console.log("left Sum:",leftSideSum,"- Right Sum: ",rightSideSum);
    // leftSideSum = leftSideSum + Math.floor(n/ Math.pow(10, noOfDigits-i));
    // rightSideSum = rightSideSum + Math.floor(n % Math.pow(10, i));
    //     console.log("left Sum:",leftSideSum,"- Right Sum: ",rightSideSum);

    // }
    

    while (n > 0) {
                console.log("left Sum:",leftSideSum,"- Right Sum: ",rightSideSum);

temp = n % 10;
if(count < noOfDigits /2){
    console.log(count, "Increasing leftside by ",temp);
    leftSideSum+=temp;
}
else{
    rightSideSum += temp;
    console.log(count, "Increasing rightSide by ",temp);
}    
n = Math.floor(n/10);
count++;
}
if(leftSideSum==rightSideSum){return true;}
else{return false;}
}


console.log(isLucky(1230));