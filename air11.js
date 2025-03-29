const getPyramid = (symbol, numberFloor) => {
  let floor = symbol

  for (let i = 0; i < numberFloor; i++) {
    let symbolNumber = 1
    for (let j = i + 1; j < numberFloor; j++) {
      symbolNumber += 2
    }
    let spaceNumber = (symbolNumber - 1) / 2
    let space = ""
    for (let k = 0; k < spaceNumber; k++) {
      space += " "
    }
    console.log(space + floor + space)
    floor += symbol + symbol
  }
}

const isValidArgsLength = (args, expectedLength) => {
  if (args.length !== expectedLength)
    return console.error(
      `Le programme a besoin de ${expectedLength} arguments pour fonctionner.`
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error("Le programme a besoin d'un nombre pour fonctionner.")
  return n
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayPyramid = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const numberFloor = isValidNumber(args[1])
  if (!numberFloor) return

  const symbol = args[0]
  return getPyramid(symbol, numberFloor)
}

displayPyramid()
