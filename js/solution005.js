/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

let numbers = [5,3,2,1,4,0.5]

function removeSmallest(numbers){
  
  let lowerValue; //we make a variable that will contain the lowest number of the array
  for(i = 0; i < numbers.length; i++){
    if (i === 0) {
      lowerValue = numbers[0]
    }; //we give it the starting value of the first number of the array in a way that doesnt rewrites it every loop. 
    if (lowerValue > numbers[i]){
      lowerValue = numbers[i]
    }; //if the current value in lowerValue is bigger than the one we are looping on, we transfer numbers[i] to lowerValue
  }
  let numbers2 = numbers.map(n => n) //we obtain a copy of the numbers array so we dont mutate the original
  let lowerValueIndex = numbers2.indexOf(lowerValue) //we obtain the index of the lowest value. if lower value is duplicated, we get the first one.
  numbers2.splice(lowerValueIndex, 1) //we take out only the lowest value
  return numbers2
  }

  console.log(removeSmallest(numbers))
  