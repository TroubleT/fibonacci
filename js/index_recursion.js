const a = parseInt(prompt('Enter sequence number:'));
function fibonacci(a) {
  if (a <= 2) return 1;

  return fibonacci(a - 1) + fibonacci(a - 2);
}
alert (fibonacci(a));