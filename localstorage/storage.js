// store data in local storage
localStorage.setItem('name', 'kennedy')

localStorage.setItem('age', 22)



// get data from local storage

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age)





// updating data


// localStorage.setItem('name', 'jones')
//
// // using also notations
// localStorage.age = 50
//
// name = localStorage.getItem('name')
// age = localStorage.getItem('age')
// console.log(name, age)


// deleting data from local storage
//localStorage.removeItem('name')
localStorage.clear()



name = localStorage.getItem('name')
age = localStorage.getItem('age')

console.log(name, age)



// stringify & parsing Data

const todos = [

    {text: 'play fifa', author: 'ken'},
    {text: 'play pes', author: 'Dt'},
    {text: 'play jeez', author: 'kevin'},
]

console.log(todos)

console.log(JSON.stringify(todos))
localStorage.setItem('todos', JSON.stringify(todos))

let ok = localStorage.getItem('todos')

console.log(JSON.parse(ok))



