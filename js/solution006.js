/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
 */



let numbers = [5,3,2,2,4,0.5]

function sumArray(array) {
  if (array == null || array.length == 1) {return 0} //imput validation
  else {
    array.sort((a, b) => a - b) //order from less to more
    array.pop()
    array.shift()
    return array.reduce((a, b) => a + b, 0) //after taking highest and lowest values, sum up and return the result
   
  }
  
}

console.log(sumArray(numbers))