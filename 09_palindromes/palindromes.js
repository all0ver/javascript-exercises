const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "");
    string = string.replace(/\s+/g, "");
    string = string.toLowerCase();
    Array.from(string);
    for (let i = 0; i<string.length; i++) {
        if (!(string[i] === string[string.length-i-1])) {
            console.log("string: "+string[i]+" ;reversed: "+string[string.length-i-1]);
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
