


let alphabetMap= {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
}

let dictionary = {
    uska: "His",
    naam: "Name",
    hai: "is",
    "uska naam":"His Name",
    
}
function convertStringToWordArray(stringInput) { 
    return stringInput.trim().split(" ");
}
function translator(input) {
    let translation = "";
    let words = convertStringToWordArray(input);
    words.forEach(word => {
        if (dictionary[word]) {
            translation += dictionary[word];
        } else { 
            translation += word;
        }
        translation += " ";
    });
    return translation;
}

let inputString = "uska naam hai Ismail";
let inputString2 = "uska naam";

// console.log(translator(inputString));
console.log(dictionary[inputString2]);