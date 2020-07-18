// Fetch
// Só vai disparar o catch caso ocorra um erro de rede
/*
const fetch = require('node-fetch')
fetch(`/data.json`)
  .then(responseStream => {
    if (responseStream.status === 200){
      responseStream.json()
    } else {
      throw new Error(`Request error`)
    }

  })
  .then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
*/

// ES7: Async/Await
const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345)
  },1000)
})

const simpleFunc = async () => {
  //throw new Error(`Oh, no!`)
  const data = await asyncTimer()
  return data
}

simpleFunc()
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

  // EventEmitter <- Node
  // EventTarget <- browser (menos métodos)
  const EventEmitter = require(`events`)

  class Users extends EventEmitter {
    userLogged(data) {
      this.emit('User logged', data)
    }
  }
  const users = new Users()

  /*
  users.on(`User logged`, data => {
    console.log(data)
  })

  users.userLogged({ user: `Diego Senott` })
  */
  users.once(`User logged`, data => {
    console.log(data)
  })
  users.userLogged({ user: `Diego Senott` })
  users.userLogged({ user: `José Silva` })
