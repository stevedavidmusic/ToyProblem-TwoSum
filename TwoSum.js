//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(arr, num) {
    var hold1 = 0
        hold2 = 0
    for(let i = 0; i < arr.length; i++){
      var copyArr = [...arr]
      var splicedCopy = copyArr.splice(i, 1)
      for(let k = 0; k < copyArr.length; k++){
        if(splicedCopy[0] + copyArr[k] === num){
          hold1 = arr.indexOf(splicedCopy[0])
          hold2 = arr.lastIndexOf(copyArr[k])
        }
      }
    } return [hold1, hold2]
  }
  
  console.log(twoSum([ 1234, 5678, 9012 ], 14690), "EXPECTED [1, 2]")
  console.log(twoSum([1, 2, 3], 4), "EXPECTED [0, 2]")
  console.log(twoSum([2, 2, 3], 4), "EXPECTED [0, 1]")
