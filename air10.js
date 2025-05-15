const getContentFile = (fileName) => {
  const { readFileSync } = require("node:fs")

  const content = readFileSync(fileName, "utf8")
  return content
}

const isValidLength = (validLength) => {
  if (!validLength)
    return console.error("ERROR: Number of Arguments is Invalid.")
  return true
}

const isValidFileExtension = (fileName, validFileExtension) => {
  const fileExtension = fileName.split(".")[1]

  if (fileExtension !== validFileExtension)
    return console.error("L'extension du fichier n'est pas valide.")
  return fileName
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveContentFile = () => {
  const args = getArgs()
  const validLength = args.length === 1

  if (!isValidLength(validLength)) return

  const fileName = isValidFileExtension(args[0], "txt")
  if (!fileName) return

  return getContentFile(fileName)
}

console.log(resolveContentFile())
