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
