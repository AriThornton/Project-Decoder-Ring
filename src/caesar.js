function caesar(input, shift, encode = true) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = "";
    let inputedInfo = input.toLowerCase();

    if (shift === 0 || shift < -25 || shift > 25 || !shift || !input) {
        return false;
    }

    for (let i = 0; i < inputedInfo.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (!alphabet.includes(inputedInfo[i])) {
                result += inputedInfo[i];
                break
            }
            
            if (alphabet[j] === inputedInfo[i]) {
                let shiftValue = j + shift;
                if (!encode) {
                    shiftValue = j - shift;
                }
                
                if (shiftValue < 0) {
                    shiftValue += 26;
                    result += alphabet[shiftValue];
                } else if (shiftValue > 25) {
                    shiftValue -= 26;
                    result += alphabet[shiftValue];
                } else {
                    result += alphabet[shiftValue];
                }
            }
        }
    }
    return result;
}

module.exports = caesar;
