function multiply(a, b){
  b = typeof b === `undefined` ? 1 : b;
  return a * b;
}
console.log(multiply(5, 5));
console.log(multiply(5));
console.log(multiply(5, 0));

function multiplyNew(a, b = 1){
  return a * b;
}

console.log(multiplyNew(5, 5));
console.log(multiplyNew(5));
console.log(multiplyNew(5, 0));

//Lazy evaluation
function randomNumber(){
  return Math.random() * 10;
}

function multiplyRandom(a, b = randomNumber()){
  return a * b;
}

console.log(multiplyRandom(5, 5));
console.log(multiplyRandom(5));
console.log(multiplyRandom(5, 0));
