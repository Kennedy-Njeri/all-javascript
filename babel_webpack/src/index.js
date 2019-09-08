import {styleBody, addTitle} from "./dom";
import products1, {getPremiumPrices} from './data'


console.log("index file")


addTitle("javascript is powerful")

styleBody()



const premPrices = getPremiumPrices(products1)

console.log(products1, premPrices)