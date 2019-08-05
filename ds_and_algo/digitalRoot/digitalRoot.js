module.exports = function digitalRoot(num) {
    if (num < 10) {
        return num;
    }
    return digitalRoot(addDigits(num));
};

function addDigits(num) {
    let sum = 0;
    let val;
    while (num > 0) {
        val = num % 10;
        sum += val;
        num -= val;
        num /= 10;
    }
    return sum;
}
