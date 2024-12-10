const numbers = [1, 3, 5, 7, 9, 10, 12, 15, 20];

const result = numbers.filter((number) => {
  return number % 3 == 0 || number % 5 == 0;
});
console.log(result);
