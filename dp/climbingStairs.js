function climbingStairs(n) {
  return recurse(n);
}

function recurse(n) {
  if (n <= 1) return 1;

  return recurse(n - 1) + recurse(n - 2);
}

console.log(climbingStairs(100));
