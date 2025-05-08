const splitBySeparators = (string, separators) => {
  let result = []
  let substring = ""

  for (let i = 0; i <= string.length; i++) {
    if (separators.includes(string[i]) || i === string.length) {
      if (substring.length === 0) continue
      result.push(substring)
      substring = ""
      continue
    }
    substring += string[i]
  }

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

const displayArgSplitBySeparators = () => {
  const args = getArgs()

  const validLength = args.length === 1
  if (!isValidLength(validLength)) return

  const spaces = [" ", "\t", "\n"]
  const string = args[0]
  const splitedString = splitBySeparators(string, spaces)

  for (const substring of splitedString) {
    console.log(substring)
  }
}

displayArgSplitBySeparators()
