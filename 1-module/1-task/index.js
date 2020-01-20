/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let nFactorial = n;

  if (n === 0 || n === 1) {
    nFactorial = 1;

    return nFactorial;
  }

  for (i = n - 1 ; i > 1 ; i--) {
    nFactorial = nFactorial * i;
  }


  return nFactorial;
}
