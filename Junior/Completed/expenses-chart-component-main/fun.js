let numbers = [10, 20, 30, 40];

console.log(numbers);

let smaller = numbers.map((number) => {
  return number / 2;
});
console.log(smaller);

 numbers.forEach((number) => {
  number / 2;
}); 

console.log(numbers);

console.log(numbers.reduce((a,b)=>a+b))