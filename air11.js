const displayPyramid = (symbol, numberFloor) => {
  let numberSymbol = 1

  for (let i = numberFloor - 1; i >= 0; i--) {
    const numberSpace = i

    console.log(
      " ".repeat(numberSpace) +
        symbol.repeat(numberSymbol) +
        " ".repeat(numberSpace)
    )

    numberSymbol += 2
  }
}

const isValidLength = (validLength) => {
  if (!validLength)
    return console.error("ERROR: Number of Arguments is Invalid.")
  return true
}

const isValidNumber = (stringNumber) => {
  if (isNaN(stringNumber))
    return console.error("Le programme a besoin d'un nombre pour fonctionner.")
  return +stringNumber
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolvePyramid = () => {
  const args = getArgs()
  const validLength = args.length === 2

  if (!isValidLength(validLength)) return

  const numberFloor = isValidNumber(args[1])
  if (!numberFloor) return

  const symbol = args[0]
  return displayPyramid(symbol, numberFloor)
}

resolvePyramid()
