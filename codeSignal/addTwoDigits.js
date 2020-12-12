// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11

//start time: 5:56 AM

function addTwoDigits(n) {
const digit1=Math.floor(n/10);
    const digit2 = n % 10;
    console.log(digit1, "---", digit2);
return digit1 + digit2 ;
}

console.log(addTwoDigits(29));


//time taken: 2 minutes