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

const isValidArgsLength = (args, minLength) => {
  if (args.length < minLength)
    return console.error(
      `Le programme au moins besoin de ${minLength} arguments pour fonctionner.`
    )
  return args
}

const isValidNumber = (n) => {
  if (isNaN(n))
    return console.error(
      "Le programme a besoin d'un nombre en argument pour fonctionner."
    )
  return n
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveQuickSort = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

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
