//const param = document.querySelector("p")
//const param = document.querySelector("div.error")


const param = document.querySelectorAll("p")


// by class
const errors = document.querySelectorAll(".error")

param.forEach((para) => {
    console.log(para)
})

// param.forEach(para => {
//     console.log(para)
// })
//
//
// console.log(param[0])

errors.forEach(error => {

    console.log(error)

})



// get an element by ID

const title = document.getElementById("page-title")

console.log(title)



// get elements by their class name

const errors1 = document.getElementsByClassName("error")


// does not work with foreach
// errors1.forEach(erro =>{
//     console.log(erro)
// })

console.log(errors1[0])



// get elements by their tag name

const tags = document.getElementsByTagName("p")

// tags.forEach(tag => {
//     console.log(tag)
// })

console.log(tags[0])



// Adding & changing page content

const para1 = document.querySelector("p")

//console.log(para1.innerText)

para1.innerText = "This is javascrip"


// const paras = document.querySelectorAll("p")
//
// paras.forEach(paras2 => {
//     console.log(paras2.innerText)
//     paras2.innerText += "apple mac"
// })




// inside a class
const context = document.querySelector(".content")

//context.innerHTML += "<h2>This is a new h2</h2>"

const people = ["kevin", "kennedy1", "alice", "shawn"]


people.forEach(person => {
    context.innerHTML += `<p>${person}</p>`
})


// Getting & setting Attributes


const link = document.querySelector("a")

console.log(link.getAttribute("href"))

link.setAttribute("href", "htttps://sambazatech.com")

link.innerText = "sambaza tech"


const msg = document.querySelector("p")

console.log(msg.getAttribute("class"))

msg.setAttribute("class", "success")

