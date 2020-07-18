var obj = {
  prop1: `Digital Innovation One`
}
console.log(obj)

var prop1 = `Digital Innovation One`
var obj2 = {
  prop1
}
console.log(obj2)

function method1(){
  console.log(`Method called!`)
}
var obj3 = {
  method1
}
obj3.method1()

var obj4 = {
  sum: function sum(a, b){
    return a + b
  }
}
console.log(obj4.sum(45, 7))

var obj5 = {
  sum(a, b){
    return a + b
  }
}
console.log(obj5.sum(20, 7))

// Antes
var propertyName = `test`
var obj6 = {}
obj6[propertyName] = `Property value`
console.log(obj6)
// Agora
var obj7 = {
  [propertyName]: `Property value`
}
console.log(obj7)
