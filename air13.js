const executeTests = (tests) => {
  const { spawnSync } = require("node:child_process")

  for (let i = 0; i < tests.files.length; i++) {
    const testsFile = tests.files[i].tests
    const testsNumber = getTestsNumber(testsFile)

    const fileName = tests.files[i].name

    let count = 1

    for (let k = 0; k < testsFile.length; k++) {
      const args = testsFile[k]

      const result = spawnSync("node", args, {
        encoding: "utf-8",
      })

      if (result.stderr === "")
        console.log(
          `${fileName} (${count}/${testsNumber}) : \x1b[32msuccess\x1b[0m`
        )
      else
        console.error(
          `${fileName} (${count}/${testsNumber}) : \x1b[31mfailure\x1b[0m`
        )

      count++
    }
  }
}

const getTestsNumber = (testsFile) => {
  let testsNumber = 0

  for (let i = 0; i < testsFile.length; i++) {
    testsNumber++
  }

  return testsNumber
}

const getTests = () => {
  const tests = {
    epreuve: "air",
    id: 0,
    files: [
      {
        name: "air00",
        id: 0,
        tests: [
          ["./air00.js", "Bonjour les gars"],
          ["./air00.js", 3],
        ],
      },
      {
        name: "air01",
        id: 1,
        tests: [
          ["./air01", "Crevette magique dans la mer des étoiles", "la"],
          ["./air01.js", "Crevette magique dans la mer des étoiles"],
        ],
      },
      {
        name: "air02",
        id: 2,
        tests: [
          ["./air02.js", "je", "test", "des", "trucs", "a"],
          ["./air02.js", 4, 5],
        ],
      },
      {
        name: "air03",
        id: 3,
        tests: [
          ["./air03.js", "1", "2", "3", "4", "5", "4", "3", "2", "1"],
          ["./air03.js", "12", "14", "a"],
        ],
      },
      {
        name: "air04",
        id: 4,
        tests: [
          ["./air04.js", "Hello milady,   bien ou quoi ??"],
          ["./air04.js", 3],
          ["./air04.js"],
        ],
      },
      {
        name: "air05",
        id: 5,
        tests: [
          ["./air05.js", "1", "2", "3", "4", "5", "+1"],
          ["./air05.js", "poulet merguez", "tie un bon"],
        ],
      },
      {
        name: "air06",
        id: 6,
        tests: [
          ["./air06.js", "Michel", "Albert", "Therese", "Benoit", "t"],
          ["./air06.js", "Heeeey", 3],
        ],
      },
      {
        name: "air07",
        id: 7,
        tests: [
          ["./air07.js", 1, 3, 4, 2],
          ["./air07.js", 1, 3, 5, "damn"],
        ],
      },
      {
        name: "air08",
        id: 8,
        tests: [
          ["./air08.js", 10, 20, 30, "fusion", 5, 15, 25, 35],
          ["./air08.js", "gastro", "fusion"],
        ],
      },
      {
        name: "air09",
        id: 9,
        tests: [
          ["./air09.js", "Michel", "Albert", "Therese", "Benoit"],
          ["./air09.js", "Michel"],
        ],
      },
      {
        name: "air10",
        id: 10,
        tests: [
          ["./air10.js", "a.txt"],
          ["./air10.js", 3],
        ],
      },
      {
        name: "air11",
        id: 11,
        tests: [
          ["./air11.js", "x", "5"],
          ["./air11.js", "x", "NaN"],
        ],
      },
      {
        name: "air12",
        id: 12,
        tests: [
          ["./air12.js", 6, 5, 4, 3, 2, 1],
          ["./air12.js", 1, 2, "yo", 5],
        ],
      },
    ],
  }

  return tests
}

const resolveTests = () => {
  const tests = getTests()

  executeTests(tests)
}

resolveTests()
