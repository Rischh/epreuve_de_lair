const concatStrings = (strings, stringSeparator) => {
  let result = ""

  for (const string of strings) {
    if (string === strings[strings.length - 1]) {
      result += string
    } else {
      result += string + stringSeparator
    }
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

const getConcatStrings = () => {
  const args = getArgs()
  const validLength = args.length < 2

  if (!isValidLength(validLength)) return

  const strings = args.slice(0, args.length - 1)
  const stringSeparator = args[args.length - 1]

  return concatStrings(strings, stringSeparator)
}

console.log(getConcatStrings())
