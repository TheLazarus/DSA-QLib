// Constraints - There can be a maximum of 2000 stones

function canCross(stones) {
  let currPosition = 1;
  let lastJump = 1;
  let dp = new Array(2000).fill(-1).map(() => new Array(2000).fill(-1));

  return recurse(stones, currPosition, lastJump, dp);
}

function recurse(stones, currPosition, lastJump, dp) {
  if (currPosition === stones[stones.length - 1]) return true;

  if (lastJump === 0) return false;

  if (!stones.includes(currPosition)) return false;

  let currIndex = stones.indexOf(currPosition);

  if (dp[currIndex][lastJump] !== -1) return dp[currIndex][lastJump];

  let moveOne = lastJump - 1;
  let moveTwo = lastJump;
  let moveThree = lastJump + 1;

  dp[currIndex][lastJump] =
    recurse(stones, currPosition + moveOne, moveOne, dp) ||
    recurse(stones, currPosition + moveTwo, moveTwo, dp) ||
    recurse(stones, currPosition + moveThree, moveThree, dp);

  return dp[currIndex][lastJump];
}
