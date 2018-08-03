const b = parseInt(prompt('Enter sequence number:'));
function fib(b) {
    let number = Math.pow (1.618 , b) / Math.sqrt(5);
    let roundedNumber = Math.round(number);
    
    return roundedNumber;
    
}
alert (fib (b));