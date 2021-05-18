function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = n;
    for (let i = n - 1; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
}
