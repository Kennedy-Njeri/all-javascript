
// submit events

const form = document.querySelector(".signup-form")
//const username = document.querySelector("#username")
const feedback = document.querySelector(".feedback")
const usernamePattern = /^[a-zA-Z]{6,12}$/


form.addEventListener("submit", e => {
    e.preventDefault()
    //console.log(username.value)
    //console.log(form.username.value)
    // validation
    const username = form.username.value


    if(usernamePattern.test(username)){
        feedback.textContent = "that username is valid"

    } else {
        feedback.textContent = "username must contain letters only & be between 6 & 12"

    }


})



// live feedback

form.username.addEventListener("keyup", e => {
    //console.log(e.target.value, form.username.value)
    if(usernamePattern.test(e.target.value)){
        //console.log("passed")
        form.username.setAttribute("class", "success")
    } else {
        //console.log("failed")
        form.username.setAttribute("class", "error")
    }
})







// regular expressions

// ^ken$ and ^[a-z]$  ^[a-zA-Z]$ ^[a-zA-Z0-9]{6, 10}$  ^.{6, 10}$

const username = "kevinn"

const pattern = /^[a-z]{6,}$/

let result = pattern.test(username)

//console.log(result)

//
// if(result){
//     console.log("regex test passed")
// } else {
//     console.log("regex test failed")
// }


// or use method 2

let result1 = username.search(pattern)

console.log(result1)