printFizzBuzz = function (input) {
  // Your code goes here
  var result
  input >= 0
    ? input % 3 === 0 && input % 5 === 0
      ? (result = 'FizzBuzz')
      : input % 5 === 0
      ? (result = 'Buzz')
      : input % 3 === 0
      ? (result = 'Fizz')
      : (result = input)
    : (result = input)
  return result
}

printFizzBuzz(-3) === -3
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(-10) === -10
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(-15) === -15
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(9) === 'Fizz'
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(10) === 'Buzz'
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(15) === 'FizzBuzz'
  ? console.log('Test passed!')
  : console.log('Test failed!')
printFizzBuzz(16) === 16
  ? console.log('Test passed!')
  : console.log('Test failed!')
