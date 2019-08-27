class Chatroom {
    constructor(room, username){
        this.room = room
        this.username = username
        this.chats = db.collection("chats")
    }
    async addChat(message){
        //chat object
        const now = new Date()
        const chat = {

            //message:message use es6
            message,
            username:this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)

        }

        const response = await this.chats.add(chat)

        return response
    }
    getChats(callback){
        this.chats.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added"){
                    // update Ui
                    callback(change.doc.data())
                }
            })
        })
    }
    
}


const chatroom = new Chatroom("gaming", "kennedy")



chatroom.getChats(data => {
    console.log(data)
})

//console.log(chatroom)

// chatroom.addChat("hello there").then(() => {
//     console.log("chat added")
// }).catch(err => {
//     console.log(err)
// })