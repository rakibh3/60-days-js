// Create a function which take two number from user and return the sum
function add(a, b) {
  const sum = a + b;
  const mul = a * b;
  const sub = a - b;
  const div = a / b;
  return {
    sum,
    mul,
    sub,
    div,
  };
}

const result = add(3, 8);
console.log(result);
