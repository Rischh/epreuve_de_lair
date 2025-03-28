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

const validateArgsCount = (args) => {
  if (args.length < 2)
    return console.error(
      "Le programme a besoin d'au moins 2 arguments pour fonctionner."
    )
  return args
}

const validateNumericArg = (arg) => {
  if (isNaN(arg))
    return console.error(
      "Le programme a besoin d'une liste de nombres pour fonctionner."
    )
  return +arg
}

const validateOperator = (ope) => {
  const validOperators = ["+", "-"]
  if (!validOperators.includes(ope)) {
    return console.error(
      "Le programme a besoin d'un traitement (addition ou soustraction) comme dernier argument pour fonctionner."
    )
  }
  return ope[0]
}

const validateNumericOffset = (offset) => {
  if (isNaN(offset))
    return console.error(
      "Le programme a besoin d'un nombre comme operation pour fonctionner."
    )
  return offset
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveTreatmentOnNumbers = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const numbers = [...args]
  const treatment = numbers[numbers.length - 1]
  numbers.pop()

  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumericArg(numbers[i])) return
    numbers[i] = +numbers[i]
  }

  const operator = validateOperator(treatment[0])
  if (!operator) return

  let offset = ""

  for (let i = 1; i < treatment.length; i++) {
    if (!validateNumericOffset(treatment[i])) return
    offset += treatment[i]
  }

  offset = +offset

  return getTreatmentOnNumbers(numbers, operator, offset)
}

console.log(resolveTreatmentOnNumbers())
