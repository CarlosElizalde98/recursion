function recursion(n) {
  if (n == 1) {
    return n;
  } else {
    return n + recursion(n - 1);
  }
}
module.exports = recursion;
