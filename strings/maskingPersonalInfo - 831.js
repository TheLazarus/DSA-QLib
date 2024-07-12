var maskPII = function (s) {
  let arr = s.split("@");

  if (arr.length > 1) {
    let changedName = new Array(5).fill("*").join("");
    let domain = arr[1].toLowerCase();
    let finalEmail = `${arr[0][0].toLowerCase()}${changedName}${arr[0][
      arr[0].length - 1
    ].toLowerCase()}@${domain}`;
    return finalEmail;
  } else {
    let cSet = new Set(["+", "-", "(", ")", " "]);
    let str = s.split("").reduce((acc, curr) => {
      if (!cSet.has(curr)) {
        acc = `${acc}${curr}`;
      }
      return acc;
    }, "");
    let countryCode = str.length - 10;
    let finalFourDigits = str.slice(str.length - 4, str.length);
    switch (countryCode) {
      case 0:
        return `***-***-${finalFourDigits}`;

      case 1:
        return `+*-***-***-${finalFourDigits}`;
      case 2:
        return `+**-***-***-${finalFourDigits}`;

      case 3:
        return `+***-***-***-${finalFourDigits}`;
      default:
        return;
    }
  }
};

console.log(maskPII("LeetCode@LeetCode.com"));
