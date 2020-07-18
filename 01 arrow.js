function log(text){
  console.log(text);
}

log(`teste`);

// Funcão anônima
var log = function(text){
  console.log(text);
}
log(`teste`);

var sum = function(a, b){
  return a + b;
}
console.log(sum(5, 6));

// Arrow function - anônimas
var newSum = (a, b) => a + b;
console.log(newSum(32, 45));

var createObj = () => ({ test: 123 });
console.log(createObj());

// Função construtora
function Car(){
  this.foo = `bar`;
}
console.log(new Car());

// Não funciona
/*
var Car = () => {
  this.foo = `bar`;
}
console.log(new Car());
*/

// Hoisting
logHoisting(`teste`);

function logHoisting(text){
  console.log(text);
}

// Não funciona
/*
logArrow(`teste`);
var logArrow = text => console.log(text);
*/

var obj = {
  showContext: function showContext(){
    this.log(`chamou showContext`);

    /*
    setTimeout(function(){
      this.log(`After 1000ms`);
    }.bind(this), 1000);
    */
    setTimeout(() => {
      this.log(`After 1000ms`);
    }, 1000);
  },
  log: function log(value){
    console.log(value);
  }
}
obj.showContext();
