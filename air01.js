const splitBySeparator = (string, stringSeparator) => {
  const result = []

  let indexStart = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === stringSeparator[0]) {
      let isSeperator = true
      for (let j = 1; j < stringSeparator.length; j++) {
        if (string[i + j] !== stringSeparator[j]) {
          isSeperator = false
          break
        }
      }

      if (isSeperator) {
        let indexEnd = i - 1
        result.push(string.slice(indexStart, indexEnd))
        indexStart = i + stringSeparator.length
      }
    }
  }
  result.push(string.slice(indexStart))

  return result
}

const isValidLength = (validLength) => {
  if (!validLength) {
    return console.error("ERROR: Number of Arguments is Invalid.")
  }
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displaySplitedString = () => {
  const args = getArgs()

  const validLength = args.length === 2
  if (!isValidLength(validLength)) return

  const [string, stringSeparator] = args

  const strings = splitBySeparator(string, stringSeparator)

  for (const string of strings) {
    console.log(string)
  }
}

displaySplitedString()
