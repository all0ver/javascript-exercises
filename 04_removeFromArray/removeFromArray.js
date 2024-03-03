const removeFromArray = function(mainElement, ...args) {
    args.forEach(item => {
        while (mainElement.includes(item)) {
            mainElement.splice(mainElement.indexOf(item), 1);
        }
    })
    return mainElement
};

// Do not edit below this line
module.exports = removeFromArray;
