const getRemoveAdjacentChar = (string) => {
  let result = ""

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) continue
    result += string[i]
  }

  return result
}

const isValidArgsLengtt = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique argument pour fonctionner."
    )
  return args
}

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error(
      "Le programme a besoin d'une chaine de caracteres pour fonctionner."
    )
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayRemoveAdjacentChar = () => {
  const args = isValidArgsLengtt(getArgs())
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  return getRemoveAdjacentChar(string)
}

console.log(displayRemoveAdjacentChar())
