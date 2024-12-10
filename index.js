const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 400 },
  { name: "Tablet", price: 250 },
  { name: "Monitor", price: 300 },
];

const result = products.filter((product) => {
  return product["price"] >= 100 && product["price"] <= 500;
});

console.log(result);
