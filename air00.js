const splitIntoArray = (cutString, stringSeparator) => {
  let result = []
  let subString = ""

  for (let i = 0; i <= cutString.length; i++) {
    if (cutString[i] === stringSeparator || i === cutString.length) {
      if (subString.length === 0) continue
      result.push(subString)
      subString = ""
      continue
    }
    subString += cutString[i]
  }

  return result
}

const isValidArgsLength = (args, wantedLength) => {
  if (args.length !== wantedLength) {
    return console.error(
      `Le programme a besoin de ${wantedLength} argument pour fonctionner.`
    )
  }
  return args
}

const isValidString = (string) => {
  if (!isNaN(string)) {
    return console.error(
      "Le programme a besoin d'une chaine de caractere pour fonctionner."
    )
  }
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displaySplitString = () => {
  const args = isValidArgsLength(getArgs(), 1)
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  const stringSeparator = "\n"
  const splitString = splitIntoArray(string, stringSeparator)

  for (const subString of splitString) {
    console.log(subString)
  }
}

displaySplitString()
