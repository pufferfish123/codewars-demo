/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

array is non-empty. is integers, positive, negative, no floats. */

function grow(x){
   return x.reduce((acc, a) => acc * a, 1)

}