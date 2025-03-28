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

const validateArgsCount = (args) => {
  if (args.length < 3)
    return console.error(
      "Le programme a besoin d'au moins 3 arguments pour fonctionner."
    )
  return args
}

const validateNumericArg = (arg) => {
  if (isNaN(arg))
    return console.error(
      "Le programme a besoin d'une liste compose de nombres pour fonctionner."
    )
  return true
}

const validateSortedNumbers = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1])
      return console.error(
        "Le programme a besoin d'une liste de nombres trie pour fonctioner."
      )
  }
  return numbers
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayInsertIntoSortNumbers = () => {
  const args = validateArgsCount(getArgs())
  if (!args) return

  const numbers = [...args]
  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumericArg(numbers[i])) return
    numbers[i] = +numbers[i]
  }

  const insertNumber = numbers[numbers.length - 1]
  numbers.pop()

  const sortedNumbers = validateSortedNumbers(numbers)
  if (!sortedNumbers) return

  return insertIntoSortedNumbers(sortedNumbers, insertNumber).join(", ")
}

console.log(displayInsertIntoSortNumbers())
