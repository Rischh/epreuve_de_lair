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

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error(
      "Le programme a besoin d'une chaines de caracteres pour fonctionner."
    )
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayConcatStrings = () => {
  const args = getArgs()
  const validLength = args.length < 2

  if (!isValidLength(validLength)) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const strings = args.slice(0, args.length - 1)
  const stringSeparator = args[args.length - 1]

  return concatStrings(strings, stringSeparator)
}

console.log(displayConcatStrings())
