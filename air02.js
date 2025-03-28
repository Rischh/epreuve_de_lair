const concatStrings = (strings, stringSeparator) => {
  let result = ""

  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + stringSeparator
  }

  return result
}

const isValidArgsLength = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const validateStringArg = (string) => {
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
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const strings = []
  for (const arg of args) {
    if (!validateStringArg(string)) return
    strings.push(arg)
  }

  const stringSeparator = strings[strings.length - 1]
  strings.pop()

  return concatStrings(strings, stringSeparator)
}

console.log(displayConcatStrings())
