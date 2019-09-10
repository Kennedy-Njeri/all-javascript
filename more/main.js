const fruits = ["mango", "passion", "apple"]



// map i.e can be manipulate in the array
const fruitsList = fruits.map((fruit) => {
    return fruit.slice(0, -1).toUpperCase()
})

console.log(fruitsList)


// filter

const people = [
    {id: 1, name:"kevin"},
    {id: 2, name:"joe"},
    {id: 3, name:"john"},
]


const filteredPeople = people.filter(person => {
    return person.id !==2
})

console.log(filteredPeople)


// spread

const arr = [1,2,3]

const arr2 = [...arr, 4]


const arr3 = [...arr.filter(num => num !==2)]

console.log(arr3)

console.log(arr2)


const person1 = {
    name: "kennedy",
    school: "liverpool"
}

const person2 = {
    ...person1,
    id: 29389378
}

console.log(person2)


// Destructuring
const profile = {
    name: "kennedy Nk",
    address: {
        street: "13th street",
        city: "Nairobi"
    },
    hobbies: ["movies", "music"]

}


const { name, address, hobbies } = profile


console.log(name, address.city, hobbies[0])


// classes
