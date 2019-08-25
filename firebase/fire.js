const list = document.querySelector("ul")
const form = document.querySelector("form")


const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate()

    let html = `
    <li data-id="${id}">
    <div>${recipe.title}</div>
     <div>${time}</div>
     <button class="btn btn-danger btn-sm my-2">delete</button>
    </li> 
    `
    //console.log(html)

    list.innerHTML += html
}





db.collection('recepies').get().then((snapshot) => {
    //console.log(snapshot.docs[0].data())
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        console.log(doc.id)
        addRecipe(doc.data(), doc.id)
    })
}).catch(err =>{
    console.log(err)
})


// add documents

form.addEventListener("submit", e => {
    // prevents page from reloading
    e.preventDefault()

    const now = new Date()
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    db.collection('recepies').add(recipe).then(() => {
        console.log("recipe added")
    }).catch(err => {
        console.log(err.message)
    })

})


// deleting data

list.addEventListener("click", e => {
    //console.log(e)
    if (e.target.tagName === "BUTTON") {
        const id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        db.collection('recepies').doc(id).delete().then(() => {
            console.log("item deleted")
        })

    }
})