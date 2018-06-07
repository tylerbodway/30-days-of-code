function isEven(num) {
  return num % 2 === 0
}

function inInclusiveRange(num, min, max) {
  return min <= num && num <= max
}

function main() {
  const N = parseInt(readLine(), 10);

  if (!isEven(N) || isEven(N) && inInclusiveRange(N, 6, 20)) {
      console.log('Weird')
  }
  if (isEven(N) && inInclusiveRange(N, 2, 5) || isEven(N) && N > 20) {
      console.log('Not Weird')
  }
}
