// You have two integer arrays, a and b, and an integer target value v. 
//Determine whether there is a pair of numbers, where one number is taken from a and the other from b,
//that can be added together to get a sum of v.Return true if such a pair exists, otherwise return false.

// Example

// For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
// sumOfTwo(a, b, v) = true.


function sumOfTwo(a, b, v) {
if(a.length==0)return false;
if(b.length==0)return false;
b=new Set(b);
    return a.some((element) => {
        console.log(v - v - element);
        return b.has(v - element);
    } )
    
}

a = [1, 2, 3];
b = [10, 20, 30,40];
v = 42;

console.log(sumOfTwo(a, b, v));