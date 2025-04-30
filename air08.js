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

const isValidArgsFormat = (args) => {
  let stringCount = 0

  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      stringCount++
    }
  }

  if (stringCount !== 1)
    return console.error(
      "Le programme a besoin que d'une seule chaine de caracteres."
    )
  return args
}

const getSplitAtFusion = (array) => {
  let lastIndex, firstIndex

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "fusion") {
      lastIndex = i
      firstIndex = i + 1
    }
  }

  const firstArr = array.slice(0, lastIndex).map((ele) => +ele)
  const secondArr = array.slice(firstIndex, array.length).map((ele) => +ele)
  return [firstArr, secondArr]
}

const isValidArrNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]))
      return console.error(
        "Le programme a besoin d'un nombre pour fonctionner."
      )
  }
  return array.map((ele) => +ele)
}

const isValidArrLength = (array, wantedLength) => {
  if (array.length < wantedLength)
    return console.error(
      `Le programme a besoin d'une liste contenant au moins ${wantedLength} elements pour fonctionner.`
    )
  return array
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
  const args = isValidArgsFormat(getArgs())
  if (!args) return

  const arrays = getSplitAtFusion(args)
  const [firstArr, secondArr] = arrays

  const firstArrNumbers = firstArr.map((ele) => +ele)
  const secondArrNumbers = secondArr.map((ele) => +ele)
  const numbers = [firstArrNumbers, secondArrNumbers]

  for (const array of numbers) {
    if (!isValidArrLength(array, 2)) return

    if (!isValidSortedArray(array)) return
  }

  const [firstSortedNumbers, secondSortedNumbers] = numbers
  return getSortedFusion(firstSortedNumbers, secondSortedNumbers)
}

console.log(resolveSortedFusion())
