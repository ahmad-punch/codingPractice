// function lengthCheck(data, min, max) {
//     if (min < data.length && data.length < max) return true;
//     return `Please make sure the length is between ${min} and ${max}`;

// }
function lengthCheck(data: any, min = 5, max = 10): boolean | string {
  if (min <= data.length && data.length <= max) return true;
  return `Please make sure the length is between ${min} and ${max}`;
}

function checkIfString(data: any): boolean | string {
  console.log("data received in checkIfString: ", data);
  if (typeof data == "string") {
    return true;
  } else {
    return "Please Make sure the input data is of type string";
  }
}
function validator(
  data: any,
  functionsArray: { (data: any): boolean | string }[]
) {
  console.log("Args reccieved: ", functionsArray);
  for (const functionObject of functionsArray) {
    console.log("functionObject: ", functionObject);
    const check = functionObject(data);
    if (typeof check == "string") {
      return `Validation Failed with message: ${check}`;
    }
  }
  return "checks successful";
}

console.log(validator("12345", [checkIfString, lengthCheck]));
