const filterArrayBySearchString = (strings, searchString) => {
  const result = []

  for (const string of strings) {
    let hasSearchString = false

    const lowerString = string.toLowerCase()
    for (let i = 0; i < lowerString.length; i++) {
      const lowerSearchString = searchString.toLowerCase()
      if (lowerString[i] === lowerSearchString[0]) {
        hasSearchString = true

        for (let j = 1; j < lowerSearchString.length; j++) {
          if (lowerString[i + j] !== lowerSearchString[j]) {
            hasSearchString = false
            break
          }
        }
      }
    }

    if (!hasSearchString) result.push(string)
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

const getFilterArrayBySearchString = () => {
  const args = getArgs()

  const validLength = args.length > 2
  if (!isValidLength(validLength)) return

  for (const arg of args) {
    if (!isValidString(arg)) return
  }

  const strings = args.slice(0, args.length - 1)
  const searchString = args[args.length - 1]
  return filterArrayBySearchString(strings, searchString).join(", ")
}

console.log(getFilterArrayBySearchString())
