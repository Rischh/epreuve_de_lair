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

const validateArgCount = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un unique argument pour fonctionner."
    )
  return args[0]
}

const validateStringArg = (arg) => {
  if (!isNaN(arg))
    return console.error(
      "Le progranne a besoin d'une chaine de caractere pour fonctionner."
    )
  return arg
}

const getArgs = () => process.argv.slice(2)

const displaySplitString = () => {
  const arg = validateArgsCount(getArgs())
  if (!arg) return

  const cutString = validateStringArg(arg)
  if (!cutString) return

  const stringSeparator = "\n"
  const splitString = splitIntoArray(cutString, stringSeparator)

  for (const subString of splitString) {
    console.log(subString)
  }
}

displaySplitString()
