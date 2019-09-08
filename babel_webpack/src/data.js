const products1 = [
    {name: 'gold', price: 1000},
    {name: 'diamond', price: 10000},
    {name: 'bronze', price: 100},
    {name: 'silver', price: 300},
]

const getPremiumPrices = (products1) => {
    return products1.filter(product => {
        return product.price
    })
}


export { getPremiumPrices, products1 as default }



//export default products1