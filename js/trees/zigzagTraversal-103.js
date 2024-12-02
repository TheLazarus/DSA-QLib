const tree = {
  root: {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
      },
    },
    right: {
      val: 3,
      left: {
        val: 5,
      },
    },
  },
};

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const ans = [];
  const queue = [root];
  let tempQueue = [root];

  let level = 0;

  while (queue.length) {
    tempQueue = [...queue];
    const temp = [];
    const length = queue.length;

    if (level % 2 === 0) {
      for (let i = 0; i < length; i++) {
        const currentItem = tempQueue[i];
        const currentQueueItem = queue.shift();
        temp.push(currentItem.val);

        if (currentQueueItem.left) {
          queue.push(currentQueueItem.left);
        }

        if (currentQueueItem.right) {
          queue.push(currentQueueItem.right);
        }
      }
    } else {
      for (let i = length - 1; i >= 0; i--) {
        const currentItem = tempQueue[i];
        const currentQueueItem = queue.shift();
        temp.push(currentItem.val);

        if (currentQueueItem.left) {
          queue.push(currentQueueItem.left);
        }

        if (currentQueueItem.right) {
          queue.push(currentQueueItem.right);
        }
      }
    }

    level++;
    ans.push(temp);
  }

  return ans;
};

console.log(zigzagLevelOrder(tree.root));
