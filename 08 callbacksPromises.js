// Callbacks
function doSomething(callback){
  setTimeout(function(){
    callback(`First data`)
  }, 1000)
}

function doOtherThing(callback){
  setTimeout(function(){
    callback(`Second data`)
  }, 1000)
}

function doAll(){
  try {
    doSomething(function(data){
      var processedData = data.split('')

      try {
        doOtherThing(function(data2){
          var processedData2 = data2.split('')

          try {
            setTimeout(function(){
              console.log(processedData, processedData2)
            }, 1000)
          } catch (e) {
            // Handle error
          }
        })
      } catch (e) {
        // Handle error
      }

    })

  } catch (e) {
    // Handle error
  }
}
doAll()

// Promises
/*
Status:
  - Pending
  - Fulfilled
  - Rejected
*/
const doSomethingPromise = () =>
  new Promise((resolve, rejected) => {
    //throw new Error(`Something went wrong`)
    setTimeout(function(){
      resolve(`First data`)
    }, 1000)
  })

const doOtherThingPromise = () =>
  new Promise((resolve, rejected) => {
    //throw new Error(`Something went wrong`)
    setTimeout(function(){
      resolve(`Second data`)
    }, 1000)
  })

doSomethingPromise()
  .then(data => {
    console.log(data.split(``))
    return doOtherThingPromise()})
  .then((data2) => { console.log(data2.split(``)) })
  .catch((err) => {console.log(err)})

Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then(data => console.log(data))

Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then(data => console.log(data))
