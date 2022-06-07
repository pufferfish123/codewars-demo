/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */


function validatePIN (pin) {
  //we measure the pin string
  if( pin.length !== 4 && pin.length !== 6){
      return false}
  //we loop to check its only numbers
  for (let i in pin)
      if (pin[i] > '9' || pin[i] < '0'){
          return false;}
  return true;
}