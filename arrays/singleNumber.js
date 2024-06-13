// TC - O(n) SC - O(n) -- Uses extra space

function singleNumber(nums) {
  let map = {};

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  for (let [key, value] of Object.entries(map)) {
    if (value === 1) {
      return key;
    }
  }

  return -1;
}


function singleNumberOptimized() {

}




console.log(singleNumber([1, 1, 2]));
