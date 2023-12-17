export default function twoSum(nums: number[], target: number): number[] {
  let result: number[] = []
  for (let i: number = 0; i < nums.length; i++) {
    let a: number = nums[i]
    for (let j: number = 0; j < nums.length; j++) {
      let b: number = nums[j]
      if (a + b === target) {
        result = [i, j]
      }
    }
  }
  return result
}
