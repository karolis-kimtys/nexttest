var message = 'Hey @Joe_Bloggs what time are we meeting @FredBloggs?'

getRecipient = function (message, position) {
  // Your code goes here
  const splitMessage = message.split(' ')
  var usernames = []
  var result

  for (var i = 0; i < splitMessage.length; i++) {
    if (splitMessage[i][0] === '@') {
      const username = splitMessage[i].slice(1)
      const regexAllowedChar = /[\w-]+/g

      var usernameMatch = username.match(regexAllowedChar)

      usernameMatch.length === 1 && usernames.push(usernameMatch[0])
      usernameMatch.length > 1 && usernames.push(usernameMatch.join(''))
    }
  }

  result = usernames[position - 1] === undefined ? '' : usernames[position - 1]
  return result
}

// getRecipient(message)

// getRecipient(message, 1) === 'User_One'
//   ? console.log('Test passed!')
//   : console.log('Test failed!')
// getRecipient(message, 2) === 'UserABC'
//   ? console.log('Test passed!')
//   : console.log('Test failed!')
// getRecipient(message, 3) === 'Userxyz'
//   ? console.log('Test passed!')
//   : console.log('Test failed!')
// getRecipient(message, 4) === ''
//   ? console.log('Test passed!')
//   : console.log('Test failed!')
console.log('result', getRecipient(message, 2))
getRecipient(message, 2) === 'FredBloggs'
  ? console.log('Test passed!')
  : console.log('Test failed!')
