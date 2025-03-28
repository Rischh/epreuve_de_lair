const getIntruderPairs = (pairs) => {
  for (let i = 0; i < pairs.length; i++) {
    let isIntruder = true
    for (let j = i + 1; j < pairs.length; j++) {
      if (pairs[i] === pairs[j]) {
        isIntruder = false
        pairs.splice(j, 1)
        break
      }
    }
    if (isIntruder) return pairs[i]
  }
}

const validatePairs = (pairs) => {
  const firstPairs = [...pairs]

  let noPair = 0

  for (let i = 0; i < firstPairs.length; i++) {
    let isPair = true
    for (let j = i + 1; j <= firstPairs.length; j++) {
      if (firstPairs[i] === firstPairs[j]) {
        firstPairs.splice(j, 1)
        isPair = false
        break
      }
    }
    if (isPair) noPair++
  }

  if (noPair !== 1)
    return console.error(
      "Le programme a besoin d'une liste de valeurs paires et un intrus"
    )
  return true
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const displayIntruderPairs = () => {
  const pairs = getArgs()

  if (!validatePairs(pairs)) return

  return getIntruderPairs(pairs)
}

console.log(displayIntruderPairs())
