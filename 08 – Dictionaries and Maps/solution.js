function processData(input) {
  // Enter your code here

  // Separate out the input
  const inputArr = input.split("\n")
  const n = parseInt(inputArr[0])
  const phoneBookEntries = inputArr.slice(1, n+1).map(entry => entry.split(' '))
  const phoneBookQueries = inputArr.slice(n + 1)
  const phoneBook = {}

  // Save the phone book entries
  phoneBookEntries.forEach(entry => {
      const [name, phone] = entry
      phoneBook[name] = phone
  })

  // Respond to the queries
  phoneBookQueries.forEach(query => {
      if (phoneBook[query]) {
          console.log(`${query}=${phoneBook[query]}`)
      } else {
          console.log('Not found')
      }
  })
}