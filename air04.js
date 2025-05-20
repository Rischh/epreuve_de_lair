const removeAdjacentChar = (string) => {
  let result = ""

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) continue
    result += string[i]
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
      "Le programme a besoin d'une chaine de caracteres pour fonctionner."
    )
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const getRemoveAdjacentChar = () => {
  const args = getArgs()

  const validLength = args.length === 1
  if (!isValidLength(validLength)) return

  const string = isValidString(args[0])
  if (!string) return

  return removeAdjacentChar(string)
}

console.log(getRemoveAdjacentChar())
