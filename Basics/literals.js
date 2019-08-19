// object literals
// const blogs = [
//     {title: "mac rules", likes: 30},
//     {title: "Windows rules", likes: 20},
// ]
//
// console.log(blogs)

let user = {
    name: 'Kennedy wangombe',
    age: 22,
    email: 'kennedy@gmail.com',
    location: 'kenya',
    //objects in arrays
    blogs: [{title: "mac rules", likes: 30},
        {title: "Windows rules", likes: 20},
    ],
    login: function () {
        console.log("The user is logged in")
    },
    //shorter method
    logBlogs() {
         //console.log(this.blogs)
        console.log("This user has written the following blogs:")
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
        //this.blogs.forEach((blog => {
            //console.log(blog)
        //}))
    }
}

console.log(user)

console.log(user.name)






user.age = 25

console.log(user.age)


console.log(user["name"])


user["name"] = "joe murugi"

console.log(user["name"])


console.log(typeof user)

//global
console.log(this)

user.login()

user.logBlogs()



// Math object

console.log(Math)
console.log((Math.PI))


console.log(Math.E)

const area = 7.1

// round off
console.log(Math.round(area))

// number below
console.log(Math.floor(area))

// number above
console.log(Math.ceil(area))


// take away decimal leaves integer
console.log(Math.trunc(area))

// random numbers

const random = Math.random()

console.log(random)

console.log(Math.round(random * 100))


// Primitive and Reference types

// primitive includes; numbers, booleans, null, undefined, symbols
// stored in a stack
// accesed quickly but space limited

// Reference types includes; object literals, arrays, functions, dates, all other objects
// stored in a heap
// big and slower



// primitive values

let scoreOne = 50

let scoreTwo = scoreOne


console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)



// reference values

const userOne = {name: 'ken', age1: 30}
const userTwo = userOne

console.log(userOne, userTwo)

userOne.name = "vincent"

console.log(userOne, userTwo)




