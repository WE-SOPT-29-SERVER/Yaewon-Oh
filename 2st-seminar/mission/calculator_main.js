const sum = require("./sum");
const calculator = require("./calculator");

const result = sum(1, 2);
console.log(result);

console.log(calculator.add(1, 2));
console.log(calculator.substract(2, 1));
console.log(calculator.multiply(2, 3));
console.log(calculator.divide(4, 2));
