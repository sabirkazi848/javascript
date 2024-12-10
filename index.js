const words = ["Apple", "Banana", "Strawberry", "Grape", "Spinach", "Orange"];

const result = words.filter((word) => {
  return word[0] == "S";
});

console.log(result);
