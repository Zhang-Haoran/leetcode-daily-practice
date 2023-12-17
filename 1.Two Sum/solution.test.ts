import twoSum from './solution'

let nums = [2, 7, 11, 15]
let target = 9
let expectedOutput = [0, 1]
let actualOutput = twoSum(nums, target)
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected ${expectedOutput}, but got ${actualOutput} instead`
)
