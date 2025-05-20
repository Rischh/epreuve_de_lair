const displayEpreuvesTestsResult = (epreuvesTests) => {
  for (const epreuve of epreuvesTests) {
    console.log(`Tests of Epreuve: ${epreuve.name}`)

    for (const file of epreuve.files) {
      const testFile = file.tests[0]
      const expectedResult = file.results[0]

      const fileName = file.name
      const count = 1
      const testsNumber = file.tests.length

      if (isExpectedResult(testFile, expectedResult)) {
        console.log(
          `${fileName} (${count}/${testsNumber}) : ${color.green}success${color.reset}`
        )
      } else {
        console.error(
          `${fileName} (${count}/${testsNumber}) : ${color.red}failure${color.reset}`
        )
      }
    }
  }
}

const isExpectedResult = (testFile, expectedResult) => {
  const { spawnSync } = require("node:child_process")

  const dataTest = spawnSync("node", testFile, {
    encoding: "utf-8",
  })
  const testResult = dataTest.stdout

  return testResult === expectedResult
}

const color = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
}

const epreuvesTests = [
  {
    name: "Air",
    id: 0,
    files: [
      {
        name: "air00",
        id: 0,
        tests: [["./air00.js", "Bonjour les gars"]],
        results: ["Bonjour\nles\ngars\n"],
      },
      {
        name: "air01",
        id: 1,
        tests: [["./air01", "Crevette magique dans la mer des étoiles", "la"]],
        results: ["Crevette magique dans\n mer des étoiles\n"],
      },
      {
        name: "air02",
        id: 2,
        tests: [["./air02.js", "je", "teste", "des", "trucs", " "]],
        results: ["je teste des trucs\n"],
      },
      {
        name: "air03",
        id: 3,
        tests: [["./air03.js", 1, 2, 3, 4, 5, 4, 3, 2, 1]],
        results: ["5\n"],
      },
      {
        name: "air04",
        id: 4,
        tests: [["./air04.js", "Hello milady,   bien ou quoi ??"]],
        results: ["Helo milady, bien ou quoi ?\n"],
      },
      {
        name: "air05",
        id: 5,
        tests: [["./air05.js", 1, 2, 3, 4, 5, "+2"]],
        results: ["[ 3, 4, 5, 6, 7 ]\n"],
      },
      {
        name: "air06",
        id: 6,
        tests: [["./air06.js", "Michel", "Albert", "Therese", "Benoit", "t"]],
        results: ["Michel\n"],
      },
      {
        name: "air07",
        id: 7,
        tests: [["./air07.js", 1, 3, 4, 2]],
        results: ["1, 2, 3, 4\n"],
      },
      {
        name: "air08",
        id: 8,
        tests: [["./air08.js", 10, 20, 30, "fusion", 15, 25, 35]],
        results: ["[ 10, 15, 20, 25, 30, 35 ]\n"],
      },
      {
        name: "air09",
        id: 9,
        tests: [["./air09.js", "Michel", "Albert", "Therese", "Benoit"]],
        results: ["Albert, Therese, Benoit, Michel\n"],
      },
      {
        name: "air10",
        id: 10,
        tests: [["./air10.js", "a.txt"]],
        results: ["je danse le mia\n\n"],
      },
      {
        name: "air11",
        id: 11,
        tests: [["./air11.js", "x", 5]],
        results: ["    x    \n   xxx   \n  xxxxx  \n xxxxxxx \nxxxxxxxxx\n"],
      },
      {
        name: "air12",
        id: 12,
        tests: [["./air12.js", 6, 5, 4, 3, 2, 1]],
        results: ["1 2 3 4 5 6\n"],
      },
    ],
  },
]

displayEpreuvesTestsResult(epreuvesTests)
