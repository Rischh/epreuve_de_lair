const getSortedFusion = (firstSortedNumbers, secondSortedNumbers) => {
  const result = [...firstSortedNumbers]

  for (let i = 0; i < secondSortedNumbers.length; i++) {
    for (let j = 1; j < result.length; j++) {
      if (secondSortedNumbers[i] < result[0]) {
        result.unshift(secondSortedNumbers[i])
        break
      }

      if (secondSortedNumbers[i] > result[result.length - 1]) {
        result.push(secondSortedNumbers[i])
        break
      }

      if (
        secondSortedNumbers[i] > result[j - 1] &&
        secondSortedNumbers[i] < result[j]
      ) {
        result.splice(j, 0, secondSortedNumbers[i])
        break
      }
    }
  }

  return result
}

const getSeparateByString = (array, string) => {
  let lastIndex, firstIndex

  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      lastIndex = i
      firstIndex = i + 1
    }
  }

  const firstArr = array.slice(0, lastIndex)
  const secondArr = array.slice(firstIndex, array.length)
  return [firstArr, secondArr]
}

const isValidArrLength = (array, minLength) => {
  if (array.length < minLength)
    return console.error(
      `Le programme a besoin d'une liste contenant au moins ${minLength} elements pour fonctionner.`
    )
  return array
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error("Le programme a besoin d'un nombre pour fonctionner.")
  return n
}

const isValidSortedArray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j])
        return console.error(
          "Le programme a besoin d'une liste de nombres triee."
        )
    }
  }
  return numbers
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveSortedFusion = () => {
  const arrays = getSeparateByString(getArgs(), "fusion")

  for (const array of arrays) {
    if (!isValidArrLength(array, 2)) return
  }

  const firstArr = []
  for (const element of arrays[0]) {
    if (!isValidNumber(element)) return
    firstArr.push(+element)
  }

  const firstSortedNumbers = isValidSortedArray(firstArr)
  if (!firstSortedNumbers) return

  const secondArr = []
  for (const element of arrays[1]) {
    if (!isValidNumber(element)) return
    secondArr.push(+element)
  }

  const secondSortedNumbers = isValidSortedArray(secondArr)
  if (!secondSortedNumbers) return

  return getSortedFusion(firstSortedNumbers, secondSortedNumbers)
}

console.log(resolveSortedFusion())
