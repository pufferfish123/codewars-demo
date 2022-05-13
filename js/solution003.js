



let numbers = [10, 343445353, 3453445, 3453545353453]

function sumTwoSmallestNumbers(numbers) {  
  let orderedNumbers = numbers.sort((a, b) => a - b)
  
  return orderedNumbers.slice(0, 2).reduce((a, b) => a + b, 0)
  
}

console.log(sumTwoSmallestNumbers(numbers))