function sum(a, b){
  var value = 0;
  for(var i =0; i < arguments.length; i++){
    value += arguments[i]
  }
  return value
}
console.log(sum(5, 5, 2, 3, 6))

// rest operator ...
function sum(...args){
  return args.reduce((total, value) => total + value, 0)
}
console.log(sum(5, 5, 2, 3, 6, 9, 24))

const multiply = (...args) => args.reduce((total, value) => total * value, 1)
console.log(multiply(1, 2, 3))

const multiply2 = (...args) => args.reduce((total, value) => total * value, 1)
const sum2 = (...rest) => {
  return multiply2.apply(undefined, rest)
}
console.log(sum2(1, 2, 3, 4, 5))

// Spread operator ...
const multiply3 = (...args) => args.reduce((total, value) => total * value, 1)
const sum3 = (...rest) => {
  return multiply3(...rest)
}
console.log(sum3(1, 2, 3, 4, 5))

// Strings
const str = `Digital Innovation One`
function logArgs(...args){
  console.log(args)
}
logArgs(...str)

const arr = [1, 2, 3, 4]
const arr2 = [...arr, 5, 6, 7]
console.log(arr2)
const arr3 = [...arr2, ...arr, 0, 0, 0]
console.log(arr3)

// Objetos literais
const obj = {
  test: 123
}
const obj2 = {
  ...obj,
  test2: `hello`
}
console.log(obj2)

const obj3 = {
  test: 123
}
const obj4 = obj3
obj4.test = 456
console.log(obj3)

const obj5 = {
  test: 123
}
const obj6 = { ...obj5 }
obj6.test = 456
console.log(obj5)
