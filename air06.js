const getHealthPassControl = (strings, char) => {
  const result = []

  const lowerStrings = strings.map((string) => string.toLowerCase())
  const LOWER_CHAR_CODE = char.toLowerCase().charCodeAt()

  for (let i = 0; i < lowerStrings.length; i++) {
    let isChar = false
    for (let j = 0; j < lowerStrings[i].length; j++) {
      if (lowerStrings[i][j].charCodeAt() === LOWER_CHAR_CODE) {
        isChar = true
        break
      }
    }
    if (!isChar) result.push(strings[i])
  }

  return result
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length < wantedLength)
    return console.error(
      `Le programme a besoin d'au moins ${wantedLength} arguments pour fonctionner.`
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

const displayHealthPassControl = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const strings = args.slice(0, args.length - 1)
  const char = isValidCharLength(args[args.length - 1])
  if (!char) return

  return getHealthPassControl(strings, char).join(", ")
}

console.log(displayHealthPassControl())
