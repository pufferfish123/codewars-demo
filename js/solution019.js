/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
 */

function cockroachSpeed(s) {
  //first, we multiply the km x 100000 to get cm per hour
  //second, we divide the number by 3600 to obtan cm per second
  let cmPerHour = s * 1000
  return (Math.floor(cmPerHour/3600))
}

