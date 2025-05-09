const fs = require("node:fs")

const getContentFile = (fileName) => {
  const content = fs.readFileSync(fileName, "utf8")
  return content
}

const isValidLength = (validLength) => {
  if (!validLength)
    return console.error("ERROR: Number of Arguments is Invalid.")
  return true
}

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error(
      "Le programme a besoin d'une chaine de caracteres comme argument pour fonctionner."
    )
  return string
}

const isValidFileExtension = (fileName, validFileExtension) => {
  const fileExtension = fileName.split(".")[1]

  if (fileExtension !== validFileExtension)
    return console.error("L'extension du fichier n'est pas valide.")
  return fileName
}

const isExistingFile = (filePath) => {
  const isExisting = fs.existsSync(filePath)

  if (!isExisting)
    return console.error("Le fichier n'existe pas dans le dossier courrant.")
  return true
}

const isReadableFile = (filePath) => {
  try {
    fs.accessSync(filePath, fs.constants.R_OK)
    return true
  } catch (error) {
    console.error("Le fichier specifie n'est pas lisible.")
    return false
  }
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveContentFile = () => {
  const args = getArgs()
  const validLength = args.length === 1

  if (!isValidLength(validLength)) return

  const string = isValidString(args[0])
  if (!string) return

  const fileName = isValidFileExtension(string, "txt")
  if (!fileName) return

  if (!isExistingFile(fileName)) return
  if (!isReadableFile(fileName)) return

  return getContentFile(fileName)
}

console.log(resolveContentFile())
