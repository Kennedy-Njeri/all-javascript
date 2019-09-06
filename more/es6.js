// rest parameter

const double = (...nums) => {

    //console.log(nums)

    return nums.map(num => {
        return num ** 2
    })

}


const result = double(2, 3, 5, 8, 9, 10)


console.log(result)



// spread syntax

const people = ['ken', 'joy', 'mary']

const members = ['leon', 'mercy', 'collins', ...people]


console.log(members)