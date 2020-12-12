function countTinyPairs(a, b, k) {
    var count = 0;
    var counter = a.forEach(function (element, index) {
        // let Concat=element.toString()+(b[b.length - index].toString());
        var Concat = element + ""+ b[b.length - index-1] ;
        console.log("Pair:", Concat);
        if (parseFloat(Concat) < k) {
            count++;
        }
    });
    console.log("count", count);
    return count;
}
var a = [1, 2, 3];
var b = [1, 2, 3];
countTinyPairs(a, b, 32);
