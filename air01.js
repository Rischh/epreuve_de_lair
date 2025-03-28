const splitIntoArray = (cutString, stringSeparator) => {
  const result = []
  let subString = ""

  let isSeparator
  let lastIndexSeparator

  for (let i = 0; i < cutString.length; i++) {
    if (cutString[i] === stringSeparator[0]) {
      for (let j = 1; j < stringSeparator.length; j++) {
        if (cutString[i + j] === stringSeparator[j]) {
          isSeparator = true
          lastIndexSeparator = i + j
        } else {
          isSeparator = false
          break
        }
      }
      if (subString.length === 0) continue
      if (isSeparator) {
        result.push(subString)
        subString = ""
      }
    }
    if (i <= lastIndexSeparator) continue
    subString += cutString[i]
  }
  result.push(subString)

  return result
}

const isValidArgsLength = (args) => {
  if (args.length !== 2) {
    return console.error(
      "Le programme a besoin de 2 arguments pour fonctionner."
    )
  }
  return args
}

const isValidString = (string) => {
  if (!isNaN(string)) {
    return console.error(
      "Le progranne a besoin d'une chaine de caracteres pour fonctionner."
    )
  }
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displaySplitString = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const [string, stringSeparator] = args

  const splitString = splitIntoArray(string, stringSeparator)

  for (const subString of splitString) {
    console.log(subString)
  }
}

displaySplitString()
