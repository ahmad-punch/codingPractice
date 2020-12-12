
// // Explanation:
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
let maxProduct;
let steps=inputArray.length -1;
    for (let i = 0; i < steps; i++){
        console.log("index: ", i);
        let adjacentProduct = inputArray[i] * inputArray[i + 1];
        console.log("adjacentProduct ", adjacentProduct, maxProduct);
if(adjacentProduct > maxProduct || maxProduct ==null)    
{console.log("adjacent Product is greater than max product");
    maxProduct = adjacentProduct;
}   
}
return maxProduct;
}

a = [3, 6, -2, -5, 7, 3];
    b = [-23, 4, -3, 8, -12];
console.log(adjacentElementsProduct(b));

