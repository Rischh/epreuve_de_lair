const insertIntoSortedNumbers = (numbers, insertNumber) => {
  const insertInNumbers = [...numbers]

  if (insertNumber < numbers[0]) insertInNumbers.unshift(insertNumber)
  if (insertNumber > numbers[numbers.length - 1])
    insertInNumbers.push(insertNumber)

  for (let i = 1; i < insertInNumbers.length; i++) {
    if (
      insertNumber > insertInNumbers[i - 1] &&
      insertNumber < insertInNumbers[i]
    ) {
      insertInNumbers.splice(i, 0, insertNumber)
      return insertInNumbers
    }
  }

  return insertInNumbers
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

const isSorted = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] > numbers[i]) {
      return console.error(
        "Le programme a besoin d'une liste de nombres triee pour fonctioner."
      )
    }
  }
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const getInsertIntoSortedNumbers = () => {
  const args = getArgs()

  const validLength = args.length >= 3
  if (!isValidLength(validLength)) return

  const numbers = []
  for (const arg of args) {
    const number = isValidNumber(arg)
    if (!number) return
    numbers.push(number)
  }

  const sortedNumbers = numbers.slice(0, numbers.length - 1)
  if (!isSorted(sortedNumbers)) return

  const insertNumber = numbers[numbers.length - 1]
  return insertIntoSortedNumbers(sortedNumbers, insertNumber).join(", ")
}

console.log(getInsertIntoSortedNumbers())
