const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (!(typeof num == 'num')) {
        num = parseInt(num);
    }
    let fib = 0;
    let num2 = 1;
    let help = 0
    for (let i = 0; i < num; i++) {
        help = fib;
        fib += num2;
        num2 = help;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
