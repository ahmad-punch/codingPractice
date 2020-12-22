// function lengthCheck(data, min, max) {
//     if (min < data.length && data.length < max) return true;
//     return `Please make sure the length is between ${min} and ${max}`;
// }
function lengthCheck(data, min, max) {
    if (min === void 0) { min = 5; }
    if (max === void 0) { max = 10; }
    if (min <= data.length && data.length <= max)
        return true;
    return "Please make sure the length is between " + min + " and " + max;
}
function checkIfString(data) {
    console.log("data received in checkIfString: ", data);
    if (typeof data == "string") {
        return true;
    }
    else {
        return "Please Make sure the input data is of type string";
    }
}
function validator(data, functionsArray) {
    console.log("Args reccieved: ", functionsArray);
    for (var _i = 0, functionsArray_1 = functionsArray; _i < functionsArray_1.length; _i++) {
        var functionObject = functionsArray_1[_i];
        console.log("functionObject: ", functionObject);
        var check = functionObject(data);
        if (typeof check == "string") {
            return "Validation Failed with message: " + check;
        }
    }
    return "checks successful";
}
console.log(validator("12345", [checkIfString, lengthCheck]));
