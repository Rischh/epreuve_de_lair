const myQuickSort = (numbers, start, end) => {
  if (end <= start) return
  const pivot = partition(numbers, start, end)

  myQuickSort(numbers, start, pivot - 1)
  myQuickSort(numbers, pivot + 1, end)
}

const partition = (numbers, start, end) => {
  const pivot = numbers[end]
  let b = start - 1

  for (let i = start; i <= end - 1; i++) {
    if (numbers[i] < pivot) {
      b++
      ;[numbers[i], numbers[b]] = [numbers[b], numbers[i]]
    }
  }

  b++
  ;[numbers[b], numbers[end]] = [numbers[end], numbers[b]]

  return b
}

const isValidLength = (validLength) => {
  if (!validLength)
    return console.error("ERROR: Number of Arguments is Invalid.")
  return true
}

const isValidNumber = (stringNumber) => {
  if (isNaN(stringNumber))
    return console.error(
      "Le programme a besoin d'un nombre en argument pour fonctionner."
    )
  return stringNumber
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveQuickSort = () => {
  const args = getArgs()
  const validLength = args.length > 2

  if (!isValidLength(validLength)) return

  const numbers = []
  for (const arg of args) {
    if (!isValidNumber(arg)) return
    numbers.push(+arg)
  }

  const result = [...numbers]
  myQuickSort(result, 0, result.length - 1)

  return result.join(" ")
}

console.log(resolveQuickSort())
