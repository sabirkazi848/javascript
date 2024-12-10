const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "David", isActive: false },
];

const result = users.filter((user) => {
  return user["isActive"];
});

console.log(result);
