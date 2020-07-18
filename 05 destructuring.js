var arr = [`Apple`, `Banana`, `Orange`]
var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
console.log(apple)
console.log(banana)
console.log(orange)

var [apple2, banana2, orange2] = [`Apple`, `Banana`, `Orange`]
console.log(apple2)
console.log(banana2)
console.log(orange2)

var obj = {
  name: `Chico`
}
var { name } = obj
console.log(name)

var obj2 = {
  name: `Chico`,
  props: {
    age: 8
  }
}
//var age = obj2.props.age
var { name } = obj2
var { props: { age } } = obj2
console.log(name)
console.log(age)
