function substitution(input, alphabet, encode = true) {
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let otherResult = [];
    let inputedInfo = input.toLowerCase();
    
    if (!input || !alphabet) {
        return false;
    }
   
    if (alphabet.length !== 26) {
        return false;
    }
    
    for (let characters in alphabet) {
        if (otherResult.indexOf(alphabet[characters]) < 0) {
            otherResult.push(alphabet[characters]);
        } else {
            return false;
        }
    } 

    for (let i = 0; i < inputedInfo.length; i++) {
        if (inputedInfo[i] === " ") {
            result += " ";
        } else {
            let stanAbc = standardAlphabet;
            let abc = alphabet;
            if (!encode) {
                stanAbc = alphabet;
                abc = standardAlphabet;
            };

            for (let j = 0; j < stanAbc.length; j++) {
                if (inputedInfo[i] === stanAbc[j]) {
                    result += abc[j];
                }
            }
        }
    }   
    return result;
}

module.exports = substitution;
