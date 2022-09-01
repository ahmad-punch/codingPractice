// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
  const midPoint = n / 2;
  const value = midPoint + firstNumber;
  if (value >= n) {
    return value - n;
  } else {
    return value;
  }
}

//10 minutes. Went to a wrong approach//code signal said 100% faster than average.
