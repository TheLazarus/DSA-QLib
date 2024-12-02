var levelOrderTraversal = function (root) {
  if (!root) return [];

  const ans = [[root]];
  const queue = [root];

  while (queue.length) {
    const temp = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const currentItem = queue.shift();
      temp.push(currentItem.val);

      if (currentItem.left) {
        queue.push(currentItem.left);
      }

      if (currentItem.right) {
        queue.push(currentItem.right);
      }
    }

    ans.push(temp);
  }

  return ans;
};
