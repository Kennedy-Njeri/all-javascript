

//invoking a function  / expression // cant use hoisting

// const speak = function(){
//     console.log("good morning")
// };



greet()





//speak()



// Function declaration // uses hoisting
function  greet() {
    console.log("hello there")

}



// Argument & parameters

// const speak = function (name) {
//
//     console.log(`good day ${name}`)
//
// };
//
// speak("kennedy")



// returning values

// const speak = function (name = "kennedy", time = "night") {
//
//     console.log(`good ${time} ${name}`)
//
// };
//
// speak()


// const area = function (radius) {
//
//     return 3.14 * radius ** 2
//
//
// }
//
// const a = area(5)
//
// console.log(a)



// regular function

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2
//
// }

//you can remove return

const calcArea = radius => 3.14 * radius ** 2



// works with one parameter
// const calcArea = radius => {
//     return 3.14 * radius ** 2
// }



const area = calcArea(5)

console.log("area is:", area)


// practise arrow functions

// const bill = function (products, tax) {
//
//     let total = 0
//
//     for(i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//
//     return total
//
// }



// Its Arrow function
const bill = (products, tax) => {

    let total = 0

    for(i = 0; i < products.length; i++){

        total += products[i] + products[i] * tax
        console.log(products[i])
    }

    return total


}


console.log(bill([10, 15, 30], 0.5))





// Example 2

const greet1 = () => "hello world"

const result = greet1()

console.log(result)



// callbacks & foreach

const myFunc = (callbackFunc) => {

    // do something
    let value = 50
    callbackFunc(value)
}



myFunc((value) => {
// do something
   console.log(value)
})



// 2

let people = ["kennedy", "vincent", "mario", "jane"]

// people.forEach((person, index) => {
//     console.log(index, person)
// })

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson)