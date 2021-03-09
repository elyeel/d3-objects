const sum = (num) => {
  //base case
  if (num <= 1) return 1;
  // recursive base
  return num + sum(num - 1);
};
console.log(sum(5));

const fibonacci = (num) => {
  //base case
  if (num <= 1) return 1;
  //recursive case
  return fibonacci(num-1) + fibonacci(num - 2);
};
console.log(fibonacci(5));
