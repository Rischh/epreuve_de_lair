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

const isValidArgsLength = (args, minLength) => {
  if (args.length < minLength)
    return console.error(
      `Le programme a besoin d'au moins ${minLength} arguments pour fonctionner.`
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error("Le programme a besoin d'un nombre pour fonctionner.")
  return n
}

const isValidSortedNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (numbers[j] < numbers[i])
        return console.error(
          "Le programme a besoin d'une liste de nombres triee pour fonctioner."
        )
    }
  }
  return numbers
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayInsertIntoSortNumbers = () => {
  const args = isValidArgsLength(getArgs(), 3)
  if (!args) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  const insertNumber = numbers[numbers.length - 1]
  numbers.pop()

  const sortedNumbers = isValidSortedNumbers(numbers)
  if (!sortedNumbers) return

  return insertIntoSortedNumbers(sortedNumbers, insertNumber).join(", ")
}

console.log(displayInsertIntoSortNumbers())
