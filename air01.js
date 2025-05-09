const getSplitBySeparator = (string, stringSeparator) => {
  const result = []
  let substring = ""

  for (let i = 0; i < string.length; i++) {
    if (string[i] === stringSeparator[0]) {
      let isSeparator = true
      const firstState = i
      i++

      for (let j = 1; j < stringSeparator.length; j++) {
        if (string[firstState + j] === stringSeparator[j]) {
          i++
        } else {
          isSeparator = false
          i = firstState
          break
        }
      }

      if (isSeparator) {
        result.push(substring)
        substring = ""
      }
    }

    substring += string[i]
  }
  result.push(substring)

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

const displaySplitedArg = () => {
  const args = getArgs()
  const validLength = args.length === 2

  if (!isValidLength(validLength)) return

  const [string, stringSeparator] = args

  const splitedString = getSplitBySeparator(string, stringSeparator)

  for (const substring of splitedString) {
    console.log(substring)
  }
}

displaySplitedArg()
