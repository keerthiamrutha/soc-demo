// print statement
console.log("Hello, World!");
let name="keerthy";
console.log(name);
age=22;
console.log(age);


function generatewelcomeMessage(name) {
    return "welcome,"+name+"! good to see you here.";
}
let welcome
console.log(generatewelcomeMessage("keerthy"));
let addage=age+2;
console.log(addage);
let subage=age-2;
console.log(subage);
let mulage=age*2;
console.log(mulage);
let divage=age/2;
console.log(divage);
let modage=age%2;
console.log(modage);

length=2;
breath=5;
area=length*breath;
console.log(area)
function factorial(n)
{
    if(n<0)return 
    if(n===0||n===1)return 1;
    return n*factorial(n-1);

}
console.log(factorial(4));
// calculator.js

// calculator.js

const readline = require("readline");

// setup input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Simple Calculator (+, -, *, /)");

// ask for first number
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {
      let a = parseFloat(num1);
      let b = parseFloat(num2);
      let result;

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error: Division by zero!";
          break;
        default:
          result = "Invalid operation!";
      }

      console.log(`Result = ${result}`);
      rl.close();
    });
  });
});
function compoundInterest(principal, rate, time) {
    let r=rate/100;
    return principal * Math.pow((1 + r), time); 

}
let principal=1000;
let rate=5;
let time=2;
let ci=compoundInterest(principal,rate,time);
console.log("Compound Interest:",ci.toFixed(5));

if(age>=18){
  console.log("eligible")

}else{
  console.log("not eligible")
}

//grading system
let marks=70;
{
if(marks>90){
  console.log("a");
}
else if(marks>=80){
  console.log("b");
}

else if(marks>=70){
  console.log("c")
}

else if(marks>=60){
  console.log("d");
}

else{
  console.log("fail");
}
}

let speed=30;
let distance=0;
for(i=10;i<=90;i+=10){
  distance=distance+speed/6;
  if(speed<120){
    speed*=2;
  }
}
distance=distance+speed/10;
console.log(distance);

//example

let km = 19.5;
let totalPrice = 0;

for (let i = 1; i <= km; i++) {
  if (i <= 4) {
    totalPrice += 30 / 4; // ₹30 for first 4 km
  } else if (i <= 9) {
    totalPrice += 10 / 5; // ₹10 for next 5 km (5-9)
  } else if (i <= 19) {
    totalPrice += 15 / 10; // ₹15 for next 10 km (10-19)
  } else {
    totalPrice += 20; // ₹20 per km after 19 km
  }
}

console.log("Total price for", km, "km is ₹" + totalPrice.toFixed(2));



//while loop
