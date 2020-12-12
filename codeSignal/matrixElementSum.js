function matrixElementsSum(matrix) {
    let cost=0;
    matrix.forEach((floor, floorNumber) => {
        console.log("floor", floor,"- number",floorNumber);
    floor.forEach((roomCost, roomNo) => {
        console.log("roomCost", roomCost, "- roomNo:", roomNo);
        if (roomCost > 0 ) {
            console.log("cost ", cost);
            cost = cost + roomCost;
            console.log("cost ", cost);
        }
    else{
        
            if (matrix.length >= floorNumber + 2) {
            console.log("next floor exists ");
            if (matrix[floorNumber + 1].length >roomNo)
            {console.log("Below room exist, if not 0 then making it null ");
                if (matrix[floorNumber + 1][roomNo] > 0)
                { matrix[floorNumber + 1][roomNo] = null; }
                
            }
         }
           
    }    
    });
})
    return cost;
}


let a = [[0, 1, 1, 2],
[0, 5, 0, 0],
    [2, 0, 3, 3]];
let b = [[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]];
console.log(matrixElementsSum(a));


// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9