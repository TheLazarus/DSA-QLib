function reverseVowels(str) {
  const l = str.length;
  const vowels = ["a", "e", "i", "o", "u"];
  let vow = new Array();

  let strArray = str.split("");

  // Push all the vowels in an array
  for (let alph of strArray) {
    if (vowels.includes(alph.toLowerCase())) {
      vow.push(alph);
    }
  }

  // Iterate backwards through the array and keep replacing these elements

  let j = vow.length - 1;

  for (let i = 0; i < l; i++) {
    if (vowels.includes(strArray[i].toLowerCase())) {
      strArray[i] = vow[j];
      j--;
    }
  }

  return strArray.join("");
}

function reverseVowelsOptimized(str) {
  if (!str) return "";

  const l = str.length;
  const vowels = ["a", "e", "i", "o", "u"];

  let strArray = str.split("");

  let i = 0;
  let j = l - 1;

  while (i <= j) {
    const leftElement = strArray[i].toLowerCase();
    const rightElement = strArray[j].toLowerCase();
    if (
      vowels.includes(leftElement.toLowerCase()) &&
      vowels.includes(rightElement.toLowerCase())
    ) {
      let temp = strArray[i];
      strArray[i] = strArray[j];
      strArray[j] = temp;
      i++;
      j--;
    } else if (vowels.includes(leftElement)) {
      j--;
    } else if (vowels.includes(rightElement)) {
      i++;
    } else {
      i++;
      j--;
    }
  }

  return strArray.join("");
}

reverseVowelsOptimized("HELLO");
