let value1 = parseFloat(prompt("Enter 1st value: "));
let value2 = parseFloat(prompt("Enter 2nd value"));
let operator = prompt("Enter your operator");

let answer;

//very elegant use of chained ternary operators
operator === "+"?(answer = value1 + value2):
operator === "-"?(answer = value1 - value2):
operator === "*"?(answer = value1 * value2):
operator === "/"?(answer = value1 / value2):
answer = "Invalid Operator";

document.write(answer);