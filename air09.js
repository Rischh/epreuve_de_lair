const getRotateArray = (array) => {
  const result = [...array]

  for (let i = array.length - 1; i > 0; i--) {
    result[i - 1] = array[i]
    if (i === array.length - 1) result[i] = array[0]
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

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveRotateArray = () => {
  const args = isValidArgsLength(getArgs(), 2)
  if (!args) return

  return getRotateArray(args).join(", ")
}

console.log(resolveRotateArray())
