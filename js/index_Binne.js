const n = parseInt(prompt('Enter sequence number:'));
function fib(n) {
    let number = Math.pow (1.618 , n) / Math.sqrt(5);
    let roundedNumber = Math.ceil(number);
    
    return roundedNumber;
    
}
alert (fib (n));