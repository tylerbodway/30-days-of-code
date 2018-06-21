class Calculator {
    power (int1, int2) {
        if (int1 < 0 || int2 < 0) {
            throw 'n and p should be non-negative'
        } else {
            return Math.pow(int1, int2)
        }
    }
}