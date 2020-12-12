// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
    let outputLength = a.length;
    let treePositions = {};
    let sorted=a.map((element, index) => {
       
        if (element == -1) {
            treePositions[index] = -1;

        } else { 
            return element;
        }

    });  
            console.log("Complete array= ",sorted);

    sorted.sort((a, b)=>{return a-b});
         console.log("Without tree sorted= ",sorted);

    for (let key in treePositions) { 
        sorted.splice(key, 0, -1);
        console.log("Adding trees back to array= ",sorted);
    }
   return sorted.slice(0,outputLength);
    // a.sort((x, y) => {
    // console.log("a: ", x, "- b: ", y);
    //     console.log("Complate array= ",a);
    //     if (y == -1) { return y; }
    // else{
    // return x-y;}
    
    // })
    // return a;
}

let a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));