class Chatroom {
    constructor(room, username){
        this.room = room
        this.username = username
        this.chats = db.collection("chats")
        this.unsub
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
        this.unsub = this.chats.where('room', '==', this.room).orderBy('created_at').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added"){
                    // update Ui
                    callback(change.doc.data())
                }
            })
        })
    }
    updateName(username){
        this.username = username
    }
    updateRoom(room){
        this.room = room
        console.log('room updated')
        if (this.unsub){
            this.unsub()
        }

    }
    
}


const chatroom = new Chatroom("general", "kennedy")


chatroom.getChats(data => {
    console.log(data)
})

//console.log(chatroom)

// chatroom.addChat("hello there").then(() => {
//     console.log("chat added")
// }).catch(err => {
//     console.log(err)
// })



setTimeout(() =>{
    chatroom.updateRoom('gaming')
    chatroom.updateName('kevin')
    chatroom.getChats(data => {
        console.log(data)
    })
    chatroom.addChat('hello you')
}, 3000)