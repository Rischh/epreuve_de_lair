const getHealthPassControl = (strings, char) => {
  const result = []

  const lowerStrings = strings.map((string) => string.toLowerCase())
  const lowerCharCode = char.toLowerCase().charCodeAt()

  for (let i = 0; i < lowerStrings.length; i++) {
    let isChar = false
    for (let j = 0; j < lowerStrings[i].length; j++) {
      if (lowerStrings[i][j].charCodeAt() === lowerCharCode) {
        isChar = true
        break
      }
    }
    if (!isChar) result.push(strings[i])
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

const isValidCharLength = (char) => {
  if (char.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique caractere de recherche pour fonctionner."
    )
  return char
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveHealthPassControl = () => {
  const args = getArgs()
  const validLength = args.length > 2

  if (!isValidLength(validLength)) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const strings = args.slice(0, args.length - 1)
  const char = isValidCharLength(args[args.length - 1])
  if (!char) return

  return getHealthPassControl(strings, char).join(", ")
}

console.log(resolveHealthPassControl())
