const getRotateLeftArray = (array) => {
  const result = [...array]

  for (let i = array.length - 1; i > 0; i--) {
    result[i - 1] = array[i]
    if (i === array.length - 1) result[i] = array[0]
  }

  return result
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

const resolveRotateLeftArray = () => {
  const args = getArgs()
  const validLength = args.length > 2

  if (!isValidLength(validLength)) return

  return getRotateLeftArray(args).join(", ")
}

console.log(resolveRotateLeftArray())
