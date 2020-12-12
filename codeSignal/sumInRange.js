// You have an array of integers nums and an array queries, where queries[i] is a pair of indices (0-based). 
//Find the sum of the elements in nums from the indices at queries[i][0] to queries[i][1](inclusive) for each query, 
//then add all of the sums for all the queries together.Return that number modulo 109 + 7.



// Example

// For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
// sumInRange(nums, queries) = 10.

// The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.function sumInRange(nums, queries) {
// let results=[];

// test 1
// function sumInRange(nums, queries) {
// let sum=0;
// for (let i=0; i<queries.length ; i++){

//     for(let j =queries[i][0]; j<queries[i][1] +1 ; j++){
//         if (queries[i][0] == queries[i][1]) { 
//             sum = sum + nums[j] + nums[j];
//             continue;
//         }
//         sum= sum+ nums[j];
//     }

//     }
//     return sum > 0 ? sum % (1000000000 + 7) : sum + (1000000000 + 7);
// }
const { ObjectFlags } = require("typescript");
function sumInRange(nums, queries) {
let sum=0;

    let object = {};
    queries.forEach(
        (query) => { 
            console.log("Inside Object forEach");
            if (query[0] == query[1]) {
                if (object[query[0]] == null) {
                    object[query[0]] = 1;
                                          console.log("object index: ",i," is null",object[query[0]]);

                } else {
                    object[query[0]]++;
                console.log("object index is not null",object[query[0]]);}
        
    
                return;
            }
            for (let i = query[0]; i < query[1]+1; i++)
                if (object[i] == null) {
                    object[i] = 1;
                                          console.log("object index: ",i," is null",object[i]);

                } else {
                    object[i]++;
                console.log("object index is not null",object[i]);}
        }
    )
    console.log(object);
    Object.keys(object).forEach((key) => {
        sum = sum + object[key] * nums[key];
    })
    console.log(sum);
    return sum > 0 ? sum % (1000000000 + 7) : sum + (1000000000 + 7);

}

// let nums = [3, 0, -2, 6, -3, 2];
// let queries = [[0, 2], [2, 5], [0, 5]];

let nums = [-4, -18, -22, -14, -33, -47, -29, -35, -50, -19]
let queries = [[2,9], 
 [5,6], 
 [1,2], 
 [2,2], 
    [4, 5]];

// nums= [-1000]
// queries= [[0,0]]
console.log(sumInRange(nums, queries));