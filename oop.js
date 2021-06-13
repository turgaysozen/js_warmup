
// constructor
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.isRevised = false
    this.summary = () => {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
// prototype
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function () {
    const age = new Date().getFullYear() - this.year
    return age
}

Book.prototype.revise = function (newYear) {
    this.year = newYear
    this.isRevised = true
}

const book1 = new Book("My Book", "Turgay", 2011)
book1.revise(2011)
// console.log(book1)

const book2 = new Book("My Book 2", "Turgay", 2015)
// console.log(book2)


// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year)
//     this.month = month
// }

// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine("Magazine 1", "Turgay", 2022, "Jan")
// // Magazine.prototype.constructor = Magazine
// console.log(mag1)


// ES6 classess

class BookNew {
    constructor(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year
    }
    summary = () => {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    static printA() {
        return "AAA"
    }
    age = () => {
        const age = new Date().getFullYear() - this.year
        return age
    }
    revise = (newYear) => {
        this.isRevised = true
        this.year = newYear
    }
}

const book3 = new BookNew("The New Book", "Turgay", 2000)
book3.revise(2100)
console.log(book3)

console.log(BookNew.printA())

class Magazine extends BookNew{
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month
    }
}

const mag1 = new Magazine("Magazine 01", "Turgay", 2002, "JUNE")

console.log(mag1)