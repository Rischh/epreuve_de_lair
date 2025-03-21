const concatStrings = (strings, stringSeparator) => {
  let result = ""

  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + stringSeparator
  }

  return result
}

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const validateStringArg = (arg) => {
  if (!isNaN(arg))
    return console.error(
      "Le programme a besoin de chaines de caracteres pour fonctionner."
    )
  return true
}

const getArgs = () => process.argv.slice(2)

const displayConcatStrings = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const stringSeparator = args[args.length - 1]
  const strings = [...args]
  strings.pop()

  for (const string of strings) {
    if (!validateStringArg(string)) return
  }

  return concatStrings(strings, stringSeparator)
}

console.log(displayConcatStrings())
