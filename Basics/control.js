
//For loop
for (let i=0; i < 5; i++) {
    console.log("in loop", i)
}

console.log("loop Finished")



const names = ["ken", "victor", "wanjiru", "lindah"]


for(let i = 0; i < names.length; i++){
    //console.log(names[i])
    let html = `<div>${names[i]}</div>`

    console.log(html)
}

//while loop

// let i = 0
//
// while (i < 4) {
//     console.log("i loop", i)
//     i++
// }


const fruits = ["mango", "pineapple", "orange", "avocado"]

let i = 0

while(i < fruits.length){
    console.log("The fruit list", fruits[i])
    i++
}


// Do while

let z = 0

do{
    console.log("the val of z is", z)
    z++
} while (z < 5)


// // If statements
//
// const age = 25
//
// if(age > 20){
//     console.log("You are over 20 years old")
// }




const shoes = ["Gucci", "nike", "puma"]

if (shoes.length > 2){
    console.log("thats a lot of shoes")
}



// const password = "p@ssword"
//
// if(password.length >= 8){
//     console.log("That password is long enough!")
// }

// Else if

// const password = "p@ss"
//
// if(password.length >= 12){
//     console.log("That password is Strong enough!")
// } else if (password.length >= 8){
//     console.log("That password is long enough!")
// } else {
//     console.log("That password is not long enough!")
// }



//Logical operators - OR || and AND &&


const password = "p@s"

if(password.length >= 12 && password.includes("@")){
    console.log("That password is mighty enough!")
} else if (password.length >= 8 || password.includes("@")){
    console.log("That password is strong enough!")
} else {
    console.log("That password is not strong enough!")
}


// logical NOT (!)

let a = false

if(!a){
    console.log(a)
} else {
    console.log("hello")
}



// Break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){
    console.log("your scores are: ", scores[i])

    if(scores[i] === 0){
        continue
    }


    if(scores[i] === 100){
        console.log("congrats, you are the top scorer")
        break
    }
}


// Switch Statements
const grade = '70'

switch (grade){

    case '70':
        console.log("You got an A")
        break

    case '60':
        console.log("You got an B")
        break

    case '50':
        console.log("You got an C")
        break

    case '40':
        console.log("You got an D")
        break

    case '30':
        console.log("You got an E")
        break

    default:
        console.log("not a valid grade")

}

// Variables & Block Space

let age = 30

if(true){

    let age = 40

    let name1 = "kennedy"

    console.log("Inside code block:", age, name1)

    if(true){
        const  age = 50
        console.log("inside 2nd code block: ", age)
    }

}

console.log("Outside code block:", age)