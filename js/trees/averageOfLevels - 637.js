var averageOfLevels = function (root) {
  const ans = [];
  const queue = [root];

  while (queue.length) {
    let avg = 0;
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      avg += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(avg / length);
  }

  return ans;
};
