// rest parameter

const double = (...nums) => {

    //console.log(nums)

    return nums.map(num => {
        return num ** 2
    })

}


const result = double(2, 3, 5, 8, 9, 10)


console.log(result)



// spread syntax(Arrays)

const people = ['ken', 'joy', 'mary']

const members = ['leon', 'mercy', 'collins', ...people]


console.log(members)


// spread syntax (objects) brand new copy of another object

const person = {name: 'kennedy', location: 'kisumu', job: 'programmer'}

const personClone = {...person, age: 22}

console.log(personClone)



// Sets do not allow duplicate of similar values
const namesArray = ['kevin', 'clark', 'joe', 'kevin']
console.log(namesArray)


const nameSet = new Set(namesArray)

console.log(nameSet)


// convert the set of values back to arrays

const uniqueNames = [...new Set(nameSet)]

console.log(uniqueNames)


const ages = new Set()

ages.add(22)
ages.add(24)
ages.add(25).add(24)
ages.delete(22)



// check a value and also size of set
console.log(ages, ages.size)
console.log(ages.has(24), ages.has(22))

//clear set

ages.clear()
console.log(ages)


// foreach on sets
const scores2 = [
    {player: "mark", scores:50},
    {player: "joe", scores:30},
    {player: "mark", scores:70},
    {player: "ken", scores:60},
    ]


scores2.forEach(score => {
    console.log(score.player, score.scores)
})


// symbols
const symbolOne = Symbol("a generic name")
const symbolTwo = Symbol("a generic name")


console.log(symbolOne, symbolTwo, typeof symbolOne)
console.log(symbolOne == symbolTwo)


const ken = {}

ken.age = 30

ken['car'] = 'yellow'


ken[symbolOne] = 'gem'
ken[symbolTwo] = 'lint'


console.log(ken)