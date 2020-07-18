class CustomError extends Error {
  constructor({message, data}) {
    super(message)
    this.data = data
  }
}

try {
  //console.log(name)
  const name = `Bruce Wayne`
  const myError = new CustomError({
    message: `Custom message on custom error`,
    data: {
      type: `Server Error`
    }
  })
  throw myError
} catch (e) {
  console.log(e)
} finally {
  console.log(`Keep going...`)
}
