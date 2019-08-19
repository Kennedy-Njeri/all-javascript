// Adding and removing classes

// const content = document.querySelector("p")
//
// console.log(content.classList)
//
//
// // add class
// content.classList.add("error")
//
//
// // Remove
// content.classList.remove("error")
//
// content.classList.add("success")


const params = document.querySelectorAll("p")

params.forEach(pa => {
    //console.log(pa.innerText)
    //console.log(pa.textContent)
    if(pa.textContent.includes("error")){
        pa.classList.add("error")
    }

    if (pa.innerText.includes("success")){
        pa.classList.add("success")
    }

})


// give class test when one toggles

const title = document.querySelector(".title")

title.classList.toggle("test")
title.classList.toggle("test")

// writing 2x removes the class test which was assigned earlier


// Node Relationships Parents, Children & Siblings

const article = document.querySelector("article")

console.log(article.children)


console.log(Array.from(article.children))


// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// })


const title1 = document.querySelector("h2")

console.log(title1.parentElement.parentElement)

console.log(title.nextElementSibling)

console.log(title.previousElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)


// Events Basics (click events)

// const button = document.querySelector("button")
//
// button.addEventListener('click', () => {
//     console.log("you clicked me")
// })


// const now = document.querySelector("li");
//
//
// now.forEach(item => {
//     item.addEventListener("click", () => {
//         console.log("item clicked")
//     });
// });


const items = document.querySelectorAll("li")

items.forEach(item => {
    item.addEventListener("click", e => {
        //console.log("item clicked")
        //console.log(e)
        //console.log(e.target)
        e.target.style.textDecoration = "line-through"
    })
})


const items1 = document.querySelectorAll("li")

items1.forEach(item1 => {
    item1.innerHTML += "<p>this is javascript</p>"
})



// creating & removing elements

 const ul = document.querySelector("ul")

// ul.remove()


// add item when button is clicked

const click = document.querySelector("button")

// click.addEventListener("click", () => {
//     ul.innerHTML += "<li>something new</li>"
// })

// or

click.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = "something new"
   // ul.append(li)
    ul.prepend(li)

})


// event bubbling prevention using stoppropagation

// const list = document.querySelectorAll("li")
//
// list.forEach(item => {
//     item.addEventListener("click", e => {
//         console.log("event in li")
//         e.stopPropagation()
//         e.target.remove()
//     })
// })

ul.addEventListener("click", e => {
    //console.log("event in ul")
    //console.log(e)
    if (e.target.tagName === "LI"){
        e.target.remove()

    }

})