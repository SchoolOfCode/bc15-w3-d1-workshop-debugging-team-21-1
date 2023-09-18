function countNumberOfNinesInNumber(number) {
  let count = 0;
  let numberAsString = number.toString();
  for (let i = 0; i < numberAsString.length; i++) {
    let digit = numberAsString[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
console.log(countNumberOfNinesInNumber(1115.1257846));