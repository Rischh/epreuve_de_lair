const { spawnSync } = require("node:child_process")

const executeTests = (tests, testName) => {
  let count = 1
  const testsNumber = getTestsNumber(tests)

  for (let i = 0; i < tests.length; i++) {
    const args = tests[i]

    const result = spawnSync("node", args, {
      encoding: "utf-8",
    })

    if (result.stderr === "")
      console.log(
        `${testName} (${count}/${testsNumber}) : \x1b[32msuccess\x1b[0m`
      )
    else
      console.error(
        `${testName} (${count}/${testsNumber}) : \x1b[31mfailure\x1b[0m`
      )

    count++
  }
}

const getTestsNumber = (tests) => {
  let testsNumber = 0

  for (const test of tests) {
    testsNumber++
  }

  return testsNumber
}

const getTests = () => {
  const tests = {
    air00: [
      ["./air00.js", "Bonjour les gars"],
      ["./air00.js", 3],
    ],
    air01: [
      ["./air01", "Crevette magique dans la mer des étoiles", "la"],
      ["./air01.js", "Crevette magique dans la mer des étoiles"],
    ],
    air02: [
      ["./air02.js", "je", "test", "des", "trucs", "a"],
      ["./air02.js", 4, 5],
    ],
    air03: [
      ["./air03.js", "1", "2", "3", "4", "5", "4", "3", "2", "1"],
      ["./air03.js", "12", "14", "a"],
    ],
    air04: [
      ["./air04.js", "Hello milady,   bien ou quoi ??"],
      ["./air04.js", 3],
      ["./air04.js"],
    ],
    air05: [
      ["./air05.js", "1", "2", "3", "4", "5", "+1"],
      ["./air05.js", "poulet merguez", "tie un bon"],
    ],
    air06: [
      ["./air06.js", "Michel", "Albert", "Therese", "Benoit", "t"],
      ["./air06.js", "Heeeey", 3],
    ],
    air07: [
      ["./air07.js", 1, 3, 4, 2],
      ["./air07.js", 1, 3, 5, "damn"],
    ],
    air08: [
      ["./air08.js", 10, 20, 30, "fusion", 5, 15, 25, 35],
      ["./air08.js", "gastro", "fusion"],
    ],
    air09: [
      ["./air09.js", "Michel", "Albert", "Therese", "Benoit"],
      ["./air09.js", "Michel"],
    ],
    air10: [
      ["./air10.js", "a.txt"],
      ["./air10.js", 3],
    ],
    air11: [
      ["./air11.js", "x", "5"],
      ["./air11.js", "x", "NaN"],
    ],
    air12: [
      ["./air12.js", 6, 5, 4, 3, 2, 1],
      ["./air12.js", 1, 2, "yo", 5],
    ],
  }

  return tests
}

const resolveTests = () => {
  const tests = getTests()

  for (const key in tests) {
    executeTests(tests[key], key)
  }
}

resolveTests()
