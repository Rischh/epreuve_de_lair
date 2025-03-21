const getRemoveAdjacentChar = (string) => {
  let result = ""

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) continue
    result += string[i]
  }

  return result
}

const validateArgCount = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un argument pour fonctionner."
    )
  return args[0]
}

const validateStringArg = (arg) => {
  if (!isNaN(arg))
    return console.error(
      "Le programme a besoin d'une chaine de caracteres comme argument pour fonctionner."
    )
  return arg
}

const getArgs = () => process.argv.slice(2)

const displayRemoveAdjacentChar = () => {
  const arg = validateArgCount(getArgs())
  if (!arg) return

  const string = validateStringArg(arg)
  if (!string) return

  return getRemoveAdjacentChar(string)
}

console.log(displayRemoveAdjacentChar())
