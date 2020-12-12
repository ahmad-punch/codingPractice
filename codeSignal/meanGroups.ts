function meanGroups(a: number[][]): {
  let b = a.map((element, index) => {
    let sum = 0;
    sum = element.forEach((e) => {
      return (sum = sum + e);
    });
    console.log("sum:", sum);
    let average = sum / element.length;
  });
}

let a = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];
meanGroups(a);
