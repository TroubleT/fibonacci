const n = parseInt(prompt('Enter sequence number:'));
function fib(n) {
    let pre = 1;
    let prePre = 1;
    let i;
    for (i = 3; i <=n; i++) {
        var next = pre + prePre;
        prePre = pre;
        pre = next;
    }
    return next;
    
}
alert (fib (n));