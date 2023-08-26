function isValidIP(ip) {
    let arr = ip.split('.');
    if (arr.length !== 4) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 255 || arr[i] < 0) {
            return false;
        }
        if (arr[i].length > 1 && arr[i][0] === '0') {
            return false;
        }
    }
    return true;
}


console.log(isValidIP("1.2.3.4"))// true
console.log(isValidIP("1.2.3"))// false
console.log(isValidIP("1.2.3.4.5"))// false
console.log(isValidIP("123.456.67.89"))// true
console.log(isValidIP("123.456.78.90"))// false
console.log(isValidIP("123.045.067.089"))// false
