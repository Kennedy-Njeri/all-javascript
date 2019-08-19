// Getting & setting Attributes


const link = document.querySelector("a")

console.log(link.getAttribute("href"))

link.setAttribute("href", "htttps://sambazatech.com")

link.innerText = "sambaza tech"


const msg = document.querySelector("p")

console.log(msg.getAttribute("class"))

msg.setAttribute("class", "success")

msg.setAttribute("style", "color:red")


const title = document.querySelector("h1")

//not good it changes all properties
//title.setAttribute("style", "margin:10px")


console.log(title.style)
console.log(title.style.color)

//better way
title.style.color = "yellow"
title.style.margin = "10px"
title.style.fontSize = "100px"
title.style.margin = ""