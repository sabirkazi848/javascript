const numbers = [
  1, 3, 5, 7, 9, 10, 12, 15, 18, 20, 23, 30, 35, 40, 45, 50, 53, 55,
];

const isPrime = (num) => {
  if (num < 2) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // if divisible, not prime
  }
  return true; // prime number
};

const result = numbers.filter((number) => {
  return (
    number % 3 == 0 &&
    number % 5 == 0 &&
    number > 10 &&
    number < 50 &&
    !isPrime(number)
  );
});

console.log(result);
