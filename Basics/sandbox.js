
// Variables, constants & comments
//let age = 25
//let year = 2018

//console.log(age, year)


/* age = 30

console.log(age) */


const height = 7

//height = 8

console.log(height)


var score = 100

console.log(score)


// score = 1200
//
// console.log(score)


// Strings
console.log("My name is Kennedy")

let name = "My name is jusper"

console.log(name)


// String concatenation

let firstName = "Kennedy"

let lastName = "Njoroge"

let names = firstName + " " + lastName

console.log(names)


//getting characters

console.log(names[0])

//string length
console.log(names.length)

//string methods
console.log(names.toUpperCase())
//console.log(names.toLowerCase())

let lower = names.toLowerCase()
console.log(lower)

let sentence = "This is javascript"

console.log(sentence.indexOf("javascript"))


//common string Methods

let email = "mistakenz123@gmail.com"

// index
let result = email.lastIndexOf("n")

//slice
//let result = email.slice(0, 10)

// substring
//let result = email.substr(2, 10)

// replace
//let result = email.replace('n', 'w')

console.log(result)



// Numbers


// let radius = 10

// const pi = 3.14


// let result1 = radius % 3

// let result1 = pi * radius * radius

// Order of Operations

// let result1 = 5 * (10-3)**2

// console.log(result1)

 let score1 = 20
//
// score1 += 10
//
// score1 -= 10
//
// score1 *= 10
//
// score1 /= 10
//
// console.log(score1)


// Not A Number

// console.log(5 / "hi")

// let result1 = 'the game score was ' + score1 + " points"
//
//
// console.log(result1)



//Template Strings
const title = "Best players of the NBA finals"

const author = "Kennedy"

const likes = 40



// concatenation way
// let result1 = "The blog called " + title + " by " + author + " has " + likes + " likes"
//
// console.log(result1)

// template string way
let result1 = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result1)


// creating html templates

let html = `

<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>

`
console.log(html)

let players = ['curry', 'kevin Durant', 'kawhi', 'klay']

// players[1] = 'kennedy'

// console.log(players[1])


console.log(players.length)


// Array Methods
//let team = players.join(',')
// let team = players.indexOf('curry')
let team = players.concat(['jason', 'john'])
//let team = players.push("joe")
//team = players.pop()
//console.log(players)
console.log(team)


// Null & Undefined

let age = null

console.log(age, age + 3, `the age is ${age}`)


// boolean & comparisons
console.log(true, false)

// methods can return booleans

let email2 = "mistaken@ymail.com"
let employees = ["john", "kennedy", "victor"]

let result3 = email2.includes("@")
let result4 = employees.includes("kennedy")

console.log(result3)
console.log(result4)

// comparison operators
let kilometers = 300

console.log(kilometers == 300)

console.log(kilometers == 400)

console.log(kilometers != 200)

console.log(kilometers < 300)

console.log(kilometers < 400)

console.log(kilometers <= 300)

console.log(kilometers >= 300)


// strings

let allNames = "kennedy"

console.log(allNames == "kennedy")

console.log(allNames == "Kennedy")

console.log(allNames > "chris")


// loose vs strict comparison

let meters = 300

//loose comparison (different types can still be equal)

console.log(meters == 300)

console.log(meters == '300')

console.log(meters != 300)

console.log(meters != '300')


// strict comparison (different types cannot be equal)

console.log(meters === 300)

console.log(meters === '300')

console.log(meters !== 300)

console.log(meters !== '300')



// Type conversion

let mileage = '100'

mileage = Number(mileage)

console.log(mileage + 1)

console.log(typeof mileage)

//let litres = String(400)

//let litres = Boolean(0)

let litres = Boolean("")

console.log(litres, typeof litres)