class Student extends Person {
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */

    // Write your constructor here

    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id)
        this.scores = scores
    }

    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate () {
        const avg = this.scores.reduce((total, num) => total + num, 0) / this.scores.length

        if (90 <= avg && avg <= 100) {
            return 'O'
        } else if (80 <= avg && avg < 90) {
            return 'E'
        } else if (70 <= avg && avg < 80) {
            return 'A'
        } else if (55 <= avg && avg < 70) {
            return 'P'
        } else if (40 <= avg && avg < 55) {
            return 'D'
        } else {
            return 'T'
        }
    }
  }