// Symbols: gerar um identificador único
const uniqueId = Symbol()
console.log(uniqueId)
const obj = {
  [uniqueId]: `Hello`
}
console.log(obj)

// Well known symbols
/*
Symbol.iterator
Symbol.split
Symbol.toStringTag
*/

const arr = [1, 2, 3, 4, 5]
const it = arr[Symbol.iterator]()

while(true){
  let { value, done } = it.next()
  if(done){
    break
  }
  console.log(value)
}

for(let value of arr){
  console.log(value)
}

const str = `Digital Innovation One`
for(let value of str){
  console.log(value)
}

const obj2 = {
  values: [1, 2, 3, 4, 5],
  [Symbol.iterator](){
    let i = 0
    return {
      next: () => {
        i++
        return {
          value: this.values[i-1],
          done: i > this.values.length ? true : false
        }
      }
    }
  }
}
const it2 = obj2[Symbol.iterator]()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
