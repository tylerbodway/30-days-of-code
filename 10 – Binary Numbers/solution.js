function main() {
    const n = parseInt(readLine(), 10)
    const binaryArr = [...n.toString(2)]

    let currentCount = 0
    let consecutiveOnes = 0

    for(let i = 0; i <= binaryArr.length; i++) {
        // if it's a 1, increment the count, otherwise reset it
        if (binaryArr[i] === '1') {
            currentCount++
        } else {
            currentCount = 0
        }
        // if we're breaking the record on 1s, save it!
        if (currentCount > consecutiveOnes) {
            consecutiveOnes = currentCount
        }
    }

    console.log(consecutiveOnes)
}