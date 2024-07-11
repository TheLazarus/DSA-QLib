var intToRoman = function (num) {
  let map = new Map();
  map.set(1000, "M");
  map.set(500, "D");
  map.set(100, "C");
  map.set(50, "L");
  map.set(10, "X");
  map.set(5, "V");
  map.set(1, "I");
  map.set(4, "IV");
  map.set(9, "IX");
  map.set(40, "XL");
  map.set(90, "XC");
  map.set(400, "CD");
  map.set(900, "CM");

  const ns = num.toString();
  const ans = [];
  let l = ns.length - 1;
  let i = 1;

  function calculateNumeral(ans, value, i) {
    const placeCharacter = map.get(i);

    if (map.get(value * i)) {
      ans.push(map.get(value * i));
    } else if (value * i < 5 * i) {
      ans.push(new Array(value).fill(placeCharacter).join(""));
    } else {
      ans.push(
        map
          .get(5 * i)
          .concat(
            new Array((value * i - 5 * i) / i).fill(placeCharacter).join("")
          )
      );
    }
  }

  while (l >= 0) {
    let value = Number(ns[l]);
    calculateNumeral(ans, value, i);

    i = i * 10;
    l--;
  }

  return ans.reverse().join("");
};
