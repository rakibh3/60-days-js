const cart = [5, 15, 25, 35, 45, 3, 8, 4, 99];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});

const sum = withTax.reduce((acc, cost) => acc + cost, 0);
console.log('Sum:', sum);
