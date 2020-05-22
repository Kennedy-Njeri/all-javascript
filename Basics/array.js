// https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

// Filter Method

const scores = [10, 15, 30, 25, 30, 40, 5, 45]


// const filteredScores = scores.filter((score) => {
//     return score > 20
//     //console.log(score > 20)
// })
//
// console.log(filteredScores)


const users = [
    {name: "kevin", premium: false},
    {name: "kevin", premium: true},
    {name: "justin", premium: false},
    {name: "levin", premium: true},
    {name: "joe", premium: true},

]



const premiumUsers = users.filter((user) => {
    return (user.premium)
})

console.log(premiumUsers)



// map method
const prices = [20, 15, 25, 25, 30, 60, 5, 40]


const salePrices = prices.map((price) => {
    return price / 2
})

console.log(salePrices)



const products = [

    {name: "soda", price: 40},
    {name: "beer", price: 10},
    {name: "whisky", price: 35},
    {name: "wine", price: 25},

]


const saleProducts = products.map((product) => {

    if (product.price > 20){
        return {name: product.name, price: product.price / 2}
    } else {
        return product
    }

})


console.log(saleProducts)



// reduce method
const scores1 = [20, 30, 60, 40, 70, 80, 100]


// accumulator, current
const  result = scores1.reduce((acc, curr) => {
    if(curr > 50){
        acc++
    }
    return acc
}, 0)

console.log(result)


const scores2 = [
    {player: "mark", scores:50},
    {player: "joe", scores:30},
    {player: "mark", scores:70},
    {player: "ken", scores:60},
    {player: "mark", scores:50},
    {player: "joe", scores:30},
    {player: "mark", scores:70},
    {player: "ken", scores:60},
    {player: "mark", scores:10},
    {player: "joe", scores:30},
    {player: "mark", scores:70},
    {player: "ken", scores:60},
    {player: "mark", scores:50},
    {player: "joe", scores:30},
    {player: "mark", scores:60},
    {player: "ken", scores:60},

]

const markTotal = scores2.reduce((acc, curr) => {

    if(curr.player === "mark"){
        acc += curr.scores
    }
    return acc

}, 0)

console.log(markTotal)







// find method

const scores3 = [30, 50, 20, 60, 75, 40, 70]

const highScore = scores3.find(scre => {
    return scre > 60
})


console.log(highScore)


// sort method

// sorting strings

const names = ['kennedy', 'john', 'vincent', 'victor']

//names.sort()
names.reverse()

console.log(names)







// example 2 sorting numbers

const numbers = [10, 30, 50, 40, 60, 80, 70, 90, 5]

numbers.sort((a,b) => {
    return b -a
})

console.log(numbers)



// sorting objects

const players1 = [

    {player: "mark", scores:50},
    {player: "joe", scores:30},
    {player: "mark", scores:70},
    {player: "ken", scores:60},
    {player: "mark", scores:50},
    {player: "joe", scores:30},
]

// players1.sort((a,b) => {
//     if (a.scores > b.scores){
//         return -1
//     } else if (b.scores > a.scores){
//         return 1
//     } else {
//         return 0
//     }
// })

players1.sort((a,b) => {
    return b.scores - a.scores
})



console.log(players1)







// chaining Array methods

const products1 = [
    {name: 'gold', price: 1000},
    {name: 'diamond', price: 10000},
    {name: 'bronze', price: 100},
    {name: 'silver', price: 300},
]


const filtered = products1.filter(product => product.price > 200)

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`
// })

const promos = products1
    .filter(product => product.price > 200)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`)


console.log(promos)


const numbers1 = [10, 30, 50, 40, 60, 80, 70, 90, 5, "ken", "lin"]

numbers1.forEach(num => {
    console.log(num)
})

