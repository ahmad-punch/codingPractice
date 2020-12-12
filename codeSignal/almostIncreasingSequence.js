// Given a sequence of integers as an array, 
//determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
//if a0 < a1 < ... < an.Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].


//best solution
function almostIncreasingSequence(sequence) {
if(sequence.length==1) return true;
let downTrend = 0;
let maxValue;
let lastValue;
let elem, prev,last;
let skipped=false;
    last =  prev = Math.min(...sequence) -1;
    // last = prev;
        console.log("prev=", prev, "- last=", last);

for(let i=0;i<sequence.length;i++)
{
    elm=sequence[i];
    if (elm <= last) {
        
        if (skipped) return false;
        else skipped = true;
        if(elm<=prev)prev=last;
    else if(elm>=prev)prev=last=elm;
    }
    
    else {
        prev=last;
        last=elm;
    }
    console.log("prev=", prev, "- last=", last, "- elm=", elm, skipped);
}
return true;
}

a = [1, 3, 2, 1];
b = [1, 2, 1, 2];
c = [1, 3, 2];
d = [10, 1, 2, 3, 4, 5];
e = [1, 2, 5, 3, 5];
console.log(almostIncreasingSequence(e));

//passes 35/38 cases
// function almostIncreasingSequence(sequence) {
// if(sequence.length==1) return true;
// let downTrend = 0;
// let maxValue;
// let lastValue;
// sequence.forEach((e,i)=>{
//     // if(maxValue==null)maxValue=e;
//     // if(e<=maxValue)downTrend++;
//     // if(e>maxValue)maxValue=e;
    
//     if(e<=lastValue)downTrend++;
//     if(lastValue==null)lastValue=e;
//     lastValue = e;
//     if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) downTrend++;
//     console.log("e: ", e, "- lastValue: ", lastValue, "- Down Trends:", downTrend);

// })
// if(downTrend>1)return false;
// else return true;
// }


// function almostIncreasingSequence(sequence) {
// if(sequence.length==1) return true;
// let downTrend = 0;
// let maxValue;
// let lastValue;
// sequence.forEach((e)=>{
//     // if(maxValue==null)maxValue=e;
//     // if(e<=maxValue)downTrend++;
//     // if(e>maxValue)maxValue=e;
    
//     if(e<=lastValue)downTrend++;
//     if(lastValue==null)lastValue=e;
//     lastValue = e;
//     console.log("e: ", e, "- lastValue: ", lastValue, "- Down Trends:", downTrend);

// })
// if(downTrend>1)return false;
// else return true;
// }



//16/19 pass fail: 
// Input: sequence: [1, 2, 5, 3, 5]
// Output: false
// Expected Output:true
// function almostIncreasingSequence(sequence) {
// if(sequence.length==1) return true;
// let downTrend = 0;
// let maxValue;
//     sequence.forEach((e) => {
        
    
//     if (e <= maxValue) {
    
//         downTrend++;
    
//         }
//         if (maxValue == null) { maxValue = e; }
//              if (e > maxValue) {
//              maxValue = e;
    
//         }
//                 console.log("e: ",e,"- MaxValue: ",maxValue,"- Down Trends:",downTrend);

//     })
//     console.log("down trends:", downTrend);
//     if (downTrend > 1 && !( downTrend==sequence.length-1)) { return false; }
//     else { return true; }
// }

