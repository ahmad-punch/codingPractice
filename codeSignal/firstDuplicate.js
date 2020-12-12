//fully optimized solution
function firstDuplicate(a) {
    //given the condiition that the array will only containt e numbers in the range from 1 to a.length
    //we can optimise further to reduce space
    console.log("Input array: a= ", a);
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var element = a_1[_i];
        //treat the element as a 1-based index in the array
        var index = Math.abs(element) - 1;
        // console.log("element: ", element, " index: ", index);
        if (a[index] < 0) {
            console.log("a[index] : ", a[index], "is smaller than 0");
            return index + 1;
        }
        //make a [index] negative
        a[index] *= -1;
        console.log("element: ", element, " index: ", index, "array mutated to: a= ", a);
    }
    //didn't find one
    return -1;
}
//big 0 (n) time complexity
//but big space complexity
function firstDuplicate2(a) {
    var store = {};
    for (var i = 0; i < a.length; i++) {
        var num = a[i];
        if (Number.isInteger(store[num]) && store[num] !== i)
            return num;
        return -1;
    }
}
//passed all 12 tests but complexity n*n
function firstDuplicate1(a) {
    var leastOccuranceIndex = 0;
    var repeatingNumber = 0;
    var matches = 0;
    a.forEach(function (element1, index, array) {
        var elementMatches = [];
        for (var i = index + 1; i < a.length; i++) {
            if (element1 === a[i]) {
                if (matches == 0) {
                    leastOccuranceIndex = i;
                    repeatingNumber = a[i];
                    matches++;
                }
                if (leastOccuranceIndex > i) {
                    leastOccuranceIndex = i;
                    repeatingNumber = element1;
                    i = a.length;
                }
            }
        }
    });
    if (matches > 0) {
        return repeatingNumber;
    }
    else {
        return -1;
    }
}

var a = [2, 1, 3, 5, 3, 2];
var b= [1,1,1,1,1,1]
console.log(firstDuplicate(b));
