const copy = document.querySelector(".copy-me")


copy.addEventListener('copy', () => {
    console.log("My content is copyright")
})


const box = document.querySelector(".box")

box.addEventListener("mousemove", e => {
    //console.log(e)
    //console.log(e.offsetX, e.offsetY)
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
})



// mouse scroll

// document.addEventListener("scroll", e => {
//     console.log(e)
// })



document.addEventListener("wheel", e => {
    console.log(e.pageX, e.pageY)
})