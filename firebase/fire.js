const list = document.querySelector("ul")


const addRecipe = (recipe) => {
    let html = `
    <li>
    <div>${recipe.title}</div>
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