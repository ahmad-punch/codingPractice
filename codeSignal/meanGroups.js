
// function meanGroups(a) {
//     let c=new Map();
//     var b = a.map( (element, index)=> {
//         var sum = 0;
//         element.forEach( (e)=> {
//             sum = sum + e;
//             // console.log(e);
//         });
//         // console.log("sum:", sum);
//         var average = sum / element.length;
//         console.log(average);
//         c[average] == null ? c[average]  = [] : 2;
//         c[average].push(index);

//     });
//     console.log(c);
// }



function meanGroups(arr) { 
        let obj = {} 
        for (let i = 0; i < arr.length; i++) {
            if (!obj[mean(arr[i])]) {
              obj[mean(arr[i])] = [i]
            }
            else {
              obj[mean(arr[i])].push(i)
            }
    }
    let result = Object.values(obj);
    console.log(result);
        return Object.values(obj)
    } 
    
    //helper function to calculate the mean 
    function mean(arr) { 
        return arr.reduce((acc, val) => acc + val) / arr.length 
    }

var a = [
    [3, 3, 4, 2],
    [4, 4],
    [4, 0, 3, 3],
    [2, 3],
    [3, 3, 3],
];
meanGroups(a);
