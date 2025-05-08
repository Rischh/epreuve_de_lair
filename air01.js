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

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength) {
    return console.error(
      `Le programme a besoin de ${wantedLength} arguments pour fonctionner.`
    )
  }
  return args
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displaySplitedArg = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const [string, stringSeparator] = args

  const splitedString = getSplitBySeparator(string, stringSeparator)

  for (const substring of splitedString) {
    console.log(substring)
  }
}

displaySplitedArg()
