const getTreatmentOnNumbers = (numbers, operator, offset) => {
  let result = []

  for (let number of numbers) {
    if (operator === "-") {
      number -= offset
    } else number += offset

    result.push(number)
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

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error("Le programme a besoin d'un nombre pour fonctionner.")
  return n
}

const isValidOperator = (operator) => {
  const validOperators = ["+", "-"]

  if (!validOperators.includes(operator)) {
    return console.error(
      "Le programme a besoin d'un operateur valide comme argument pour fonctionner."
    )
  }
  return operator
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveTreatmentOnNumbers = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  const numbers = []
  for (let i = 0; i < args.length - 1; i++) {
    if (!isValidNumber(args[i])) return
    numbers.push(+args[i])
  }

  const treatment = args[args.length - 1]

  const operator = isValidOperator(treatment[0])
  if (!operator) return

  let offset = ""

  for (let i = 1; i < treatment.length; i++) {
    if (!isValidNumber(treatment[i])) return
    offset += treatment[i]
  }

  return getTreatmentOnNumbers(numbers, operator, +offset)
}

console.log(resolveTreatmentOnNumbers())
