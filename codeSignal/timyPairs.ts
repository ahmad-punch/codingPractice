function countTinyPairs(a: number[], b: number[], k: number): number {
  let count = 0;
  let counter = a.forEach((element, index) => {
    // let Concat=element.toString()+(b[b.length - index].toString());
    let Concat = element + b[b.length - index] + "";
    console.log("Pair:", Concat);
    if (parseFloat(Concat) < k) {
      count++;
    }
  });

  return count;
}

let a = [1, 2, 3];
let b = [1, 2, 3];

countTinyPairs(a, b, 32);
