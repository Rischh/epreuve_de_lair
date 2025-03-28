const getHealthPassControl = (strings, char) => {
  const result = []

  LOWER_CHAR_CODE = char.toLowerCase().charCodeAt()
  UPPER_CHAR_CODE = char.toUpperCase().charCodeAt()

  for (let i = 0; i < strings.length; i++) {
    let isValid = false
    for (let j = 0; j < strings[i].length; j++) {
      if (
        strings[i][j].charCodeAt() === LOWER_CHAR_CODE ||
        strings[i][j].charCodeAt() === UPPER_CHAR_CODE
      ) {
        isValid = true
        break
      }
    }
    if (!isValid) result.push(strings[i])
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
      "Le programme a besoin d'une liste de chaines de caracteres pour fonctionner."
    )
  return true
}

const validateCharCount = (char) => {
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
  const args = validateArgsCount(getArgs())
  if (!args) return

  for (const arg of args) if (!validateStringArg(arg)) return

  const strings = [...args]

  const char = validateCharCount(strings[strings.length - 1])
  if (!char) return

  strings.pop()

  return getHealthPassControl(strings, char).join(", ")
}

console.log(displayHealthPassControl())
