var maxProduct = function (nums) {
  let length = nums.length;
  let max = Math.max();

  for (let i = 0; i < length; i++) {
    let product = nums[i];
    max = Math.max(max, product);
    for (let j = i + 1; j < length; j++) {
      product = product * nums[j];
      max = Math.max(max, product);
    }
  }

  return max;
};
// The above solution runs in O(n^2)

var maxProductOptimal = function (nums) {
  let max = Math.max();
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
    max = Math.max(product, max);

    if (product === 0) {
      product = 1;
    }
  }
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product = product * nums[i];
    max = Math.max(product, max);

    if (product === 0) {
      product = 1;
    }
  }

  return max;
};

console.log(maxProductOptimal([3,-1,4]));
