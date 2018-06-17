function main() {
  // transform input into an array of rows, containing the array of column values
  const matrix = inputString.map(row => row.split(' '))
  let hourglassValues = []

  // Loop through matrix rows
  for (let i = 0; i < matrix.length - 2; i++) {
      // loop through matrix columns
      for (let j = 0; j < matrix[0].length - 2; j++) {
          // save the collection of hourglass values
          hourglassValues.push([
              matrix[i][j],   matrix[i][j+1],   matrix[i][j+2],
                              matrix[i+1][j+1],
              matrix[i+2][j], matrix[i+2][j+1], matrix[i+2][j+2]
          ])
      }
  }

  // reduce down to sum values
  const sums = hourglassValues
      .map(hourglass => hourglass
           .reduce((total, num) => total + parseInt(num), 0)
      )

  // print the largest value
  console.log(Math.max(...sums))
}
