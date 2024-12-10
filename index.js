const strings = ["apple", "banana", "cat", "dog", "elephant"];

const result = strings.filter((string) => {
  return string.length > 5;
});
console.log(result);
