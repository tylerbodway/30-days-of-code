function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);

  // Write Your Code Here

  // We will save the number of sorting swaps
  let numOfSwaps = 0;
  // Go through as many times as the array is long
  for (let i = 0; i < n; i++) {
      // Traverse through the array
      for(let j = 0; j < a.length - 1; j++) {
          // Swap ,if in decreasing order, using destructuring
          if (a[j] > a[j+1]) {
              [ a[j], a[j+1] ] = [ a[j+1], a[j] ]
              numOfSwaps++
          }
      }
      // Stop if no sorting is finished
      if (numOfSwaps === 0) break
  }

  console.log(`Array is sorted in ${numOfSwaps} swaps.`)
  console.log(`First Element: ${a.shift()}`)
  console.log(`Last Element: ${a.pop()}`)
}