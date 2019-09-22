const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const strLength = expr.length;
    let lettersArray = [];
    let shortLetter;
    let letter;

    for (let i = 0; i <= strLength - 1; i += 10) {
        const letterNumber = expr.slice(i, i + 10);
        if (letterNumber === '**********') {
            letter = ' ';
        } else {
            shortLetter = parseInt(letterNumber, 10) + '';
            const letterKey = shortLetter.replace(/10/g, ".").replace(/11/g, '-');

            letter = MORSE_TABLE[letterKey];
        }

        lettersArray.push(letter);
    }

    return lettersArray.join('');
}

module.exports = {
    decode
}