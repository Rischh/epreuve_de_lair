const getTreatmentOnNumbers = (numbers) => {
  let result = []

  const treatment = numbers[numbers.length - 1]
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push(numbers[i] + treatment)
  }

  return result
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

const resolveTreatmentOnNumbers = () => {
  const args = getArgs()
  const validLength = args.length > 2

  if (!isValidLength(validLength)) return

  const numbers = []
  for (const arg of args) {
    const number = isValidNumber(arg)
    if (!number) return
    numbers.push(number)
  }

  return getTreatmentOnNumbers(numbers)
}

console.log(resolveTreatmentOnNumbers())
