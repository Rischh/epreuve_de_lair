const findIntruder = (array) => {
  for (let i = 0; i < array.length; i++) {
    let isIntruder = true
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        isIntruder = false
        array.splice(j, 1)
        break
      }
    }
    if (isIntruder) return array[i]
  }
}

const isValidLength = (validLength) => {
  if (!validLength)
    return console.error("ERROR: Number of Arguments is Invalid.")
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const getFindIntruder = () => {
  const args = getArgs()

  const validLength = args.length >= 2
  if (!isValidLength(validLength)) return

  return findIntruder(args)
}

console.log(getFindIntruder())
