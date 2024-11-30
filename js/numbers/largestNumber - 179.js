var largestNumber = function (nums) {
    let numsInString = nums.map((num) => String(num));

    numsInString.sort((a, b) => (b + a) - (a+b));
    const result = numsInString.join('');

    if(result[0] === '0') {
        return '0';
    }

    return result;
};

console.log(largestNumber([10,2,9,39,17]));
