var removeDuplicateLetters = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  let res = [];
  let visited = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!visited.has(s[i])) {
      visited.add(s[i]);

      if (!res.length) {
        res.push(s[i]);
      } else {
        let currCode = s[i].charCodeAt(0);
        while (
          res.length &&
          currCode < res.at(-1).charCodeAt(0) &&
          i < map.get(res.at(-1))
        ) {
          visited.delete(res.at(-1));
          res.pop();
        }

        res.push(s[i]);
      }
    }
  }

  return res.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));
