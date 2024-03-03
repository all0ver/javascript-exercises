const repeatString = function(givenString, num) {
    outputString = ''
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            outputString += givenString;
        }
    } else {
        outputString = 'ERROR';
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
