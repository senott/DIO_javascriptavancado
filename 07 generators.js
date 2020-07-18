function* hello(){
  console.log(`Hello`)
  yield
  console.log(`From`)
  yield
  console.log(`Function`)
}
const it = hello()
console.log(it.next())
console.log(it.next())

const obj = {
  values: [1, 2, 3, 4, 5],
  *[Symbol.iterator](){
    for(var i = 0; i < this.values.length; i++){
      yield this.values[i]
    }
  }
}
for(let value of obj){
  console.log(value)
}
