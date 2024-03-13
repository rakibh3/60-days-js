const cart = [5, 15, 25, 35];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});

console.log(withTax.reduce((acc, cost) => acc + cost, 0));
