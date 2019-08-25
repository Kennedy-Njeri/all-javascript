const list = document.querySelector("ul")
const form = document.querySelector("form")


const addRecipe = (recipe) => {
    let time = recipe.created_at.toDate()

    let html = `
    <li>
    <div>${recipe.title}</div>
     <div>${time}</div>
    </li> 
    `
    //console.log(html)

    list.innerHTML += html
}





db.collection('recepies').get().then((snapshot) => {
    //console.log(snapshot.docs[0].data())
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        addRecipe(doc.data())
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