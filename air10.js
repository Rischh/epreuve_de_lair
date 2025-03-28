const fs = require("fs")

const getContentFile = (fileName) => {
  const data = fs.readFileSync(fileName, "utf8", (err) => {
    if (err) return console.error(err)
  })

  return data
}

const isValidArgsLength = (args) => {
  if (args.length !== 1)
    return console.error(
      "Le programme a besoin d'un argument pour fonctionner."
    )
  return args
}

const isValidString = (string) => {
  if (!isNaN(string))
    return console.error(
      "Le programme a besoin d'une chaine de caracteres comme argument pour fonctionner."
    )
  return string
}

const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const resolveContentFile = () => {
  const args = isValidArgsLength(getArgs())
  if (!args) return

  const string = isValidString(args[0])
  if (!string) return

  const fileName = string
  return getContentFile(fileName)
}

console.log(resolveContentFile())
