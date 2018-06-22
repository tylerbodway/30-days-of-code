class Solution {
    constructor(stack=[], queue=[]) {
        this.stack = stack
        this.queue = queue
    }

    pushCharacter(char) {
        this.stack.push(char)
    }

    popCharacter() {
        return this.stack.pop()
    }

    enqueueCharacter(char) {
        this.queue.push(char)
    }

    dequeueCharacter() {
        return this.queue.shift()
    }
}