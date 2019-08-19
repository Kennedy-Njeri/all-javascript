// console.log(1)
// console.log(2)
//
// setTimeout(() => {
//     console.log("callback function fired")
// }, 2000)
//
// console.log(3)
// console.log(4)


// https://jsonplaceholder.typicode.com/

//making http requests


const getTodos = (resource) => {

    return new Promise((resolve, reject) => {


        const request = new XMLHttpRequest()


// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState)
            if (request.readyState === 4 && request.status === 200){
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
                //console.log(request, request.responseText)
                const data = JSON.parse(request.responseText)
                //callback(undefined, data)
                resolve(data)
            } else if (request.readyState === 4) {
                //console.log("could not fetch the data")
                //callback("could not be found", undefined)
                reject("error getting resource")
            }
        })

        //https://jsonplaceholder.typicode.com/todos
        request.open('GET', resource)
        request.send()

    })

    }


getTodos('kevin.json').then(data => {
    console.log("Promise resolved", data)
    return getTodos("mark.json")
}).then(data => {
    console.log("promise 2 resolved", data)
    return getTodos("shawn.json")
}).then(data => {
    console.log("Promise 3 resolved", data)
}).catch(err => {
    console.log("Promise rejected", err)
})








console.log(1)
console.log(2)


//
// // callback hell
// getTodos('kevin.json', (err, data) => {
//     console.log(data)
//     getTodos('mark.json', (err, data) => {
//         console.log(data)
//     })
//     getTodos('shawn.json', (err, data) => {
//         console.log(data)
//     })
//
//     //console.log(err, data)
//     // if (err){
//     //     console.log(err)
//     // } else {
//     //     console.log(data)
//     // }
// })
//
// console.log(3)
// console.log(4)


// using promises

const getData = () => {
    return new Promise((resolve, reject) => {
        //resolve("some data")
        reject("some error")

    })
}


// version 1

// getData().then((data) => {
//     console.log(data)
// }, (err) =>{
//     console.log(err)
// })


// version 2

getData().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})



// fetch api

// fetch("mark.json").then((response) => {
//     console.log("resolved", response)
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log("rejected", err)
// })
//



// async & wait

const getTodos1 = async () => {

    const response = await fetch("kevin.json")
    const data = await response.json()
    return data


    //console.log(data)
}


const getTodos2 = async () => {

    const response = await fetch("mark.json")


    const data = await response.json()
    //return data


    console.log(data)
}



// getTodos1().then(data => {
//     console.log("resolved a", data)
//
// })

getTodos2().then(data => {
    console.log("resolved a", data)

})

