/**
* Return the smallest number in an array of numbers.
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns smallest number
*
* ex: smallest([3, 0])
* returns 0
*
* ex: smallest([1, -1, 1, 1, 1])
* returns -1
*
* ex: smallest([1, 1, 2])
* returns 1 (does not matter if it is the first or second 1)
*/

function smallest(arr) {
  let s = arr[0]
  for(let i = 0; i < arr.length; i ++){
      if(arr[i] < s) {
          s = arr[i]
      }
  }
  return s // REMEMBER TO RETURN DARN IT 
}

module.exports = smallest
