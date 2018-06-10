function processData(input) {
  // Break the input into array by line break, and no numbers
  const cleanInput = input.split("\n").filter(line => isNaN(line))
  // Break each line into even characters and odd characters
  cleanInput.forEach(line => {
      const chars = [...line]
      const evenChars = chars.filter((char, i) => i % 2 === 0).join('')
      const oddChars = chars.filter((char, i) => i % 2 === 1).join('')
      console.log(`${evenChars} ${oddChars}`)
  })
}