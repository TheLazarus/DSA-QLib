function validPalindrome(str) {
  const l = str?.length;
  if (!l) return true;

  const alphaRegex = new RegExp(/^[a-z0-9]+$/i);
  let i = 0;
  let j = l - 1;

  while (i <= j) {
    if (!alphaRegex.test(str[i])) {
      i++;
    } else if (!alphaRegex.test(str[j])) {
      j--;
    } else if (str[i]?.toLowerCase() === str[j]?.toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}



console.log(validPalindrome("race a car"))