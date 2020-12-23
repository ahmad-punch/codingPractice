

let order = 3;
let ngrams = {};

function findNgramObjectsInText(txt) { 

    for (let i = 0; i <= txt.length - order; i++) { 
        let gram = txt.substring(i, i + order);
        if (!ngrams[gram]) { 
            ngrams[gram] = [];
        }
        ngrams[gram].push(txt.charAt(i + order));
    }

    console.log(ngrams);
}

let txt="Hi there how are you and how is your family. I hope everyone is okay and so are your parents."
findNgramObjectsInText(txt)