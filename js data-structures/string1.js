function replaceAlphabet(str, n) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (alphabet.indexOf(char) !== -1) {
            let newIndex = (alphabet.indexOf(char) + n) % 26;
            newString += alphabet[newIndex];
        } else {
            newString += char;
        }
    }
    return newString;
}
