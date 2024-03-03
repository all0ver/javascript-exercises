const sumAll = function(int1, int2) {
    if (int1 < 0 || int2< 0 || typeof(int1) != 'number' || typeof(int2) != 'number') {
        return 'ERROR';
    }
    if (int1 > int2) {
        let help = int1;
        int1 = int2;
        int2 = help;
    }
    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
