var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const queue = [root];

  while (queue.length) {
    let temp = [];
    const l = queue.length;

    for (let i = 0; i < l; i++) {
      const currentElement = queue.shift();
      temp.push(currentElement.val);

      if (currentElement.children) {
        for (let j = 0; j < currentElement.children.length; j++) {
          queue.push(currentElement.children[j]);
        }
      }
    }

    ans.push(temp);
  }

  return ans;
};
