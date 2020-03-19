// opp
// wrapper object

const names = new Array(2, 5, 7, 8)


console.log(names)



const person = new Object()


person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


console.log(person)

class User {

    constructor(name){

        this.username = name
        this.score = 0

    }

    login(){
        console.log(`${this.username} just logged in!`)
        return this
    }

    logout(){
        console.log(`${this.username} just logged out!`)
        return this
    }

    intScore() {
        this.score +=1
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }


}


const  userOne = new User("kennedy")

const userTwo = new User("John")


console.log(userOne, userTwo)


// userOne.login()
// userTwo.login()


// method chaining

userOne.login().intScore().intScore().logout()


// inheritance

class Admin extends User{

    constructor(name, age) {

        super(name)

        this.age = age

    }

    deleteUser(user ){
        users = users.filter(u => {

            return u.username !== user.username
        })
    }



}



const userThree =  new Admin("jane", 29)

userThree.login()


console.log(userThree)




let users = [userOne, userTwo, userThree]

console.log(users)

userThree.deleteUser(userTwo)

console.log(users)


// constructors under the hood

// was used b4 the class keyword came along
function Users(username, email) {
    this.username = username
    this.email = email

    // this.login1 = function () {
    //     console.log(`${this.username} has logged in`)
    // }

}


Users.prototype.login1 = function () {
    console.log(`${this.username} has logged in`)
    return this
}

Users.prototype.logout = function () {
    console.log(`${this.username} has logged out`)
    return this
}

// Inheritance in prototype

function Admin1(username, email, title) {
    Users.call(this, username, email)
    this.title = title

}

Admin1.prototype = Object.create(Users.prototype)


//
// class Users {
//
//     constructor(username, email) {
//         this.username = username
//         this.email = email
//     }
//
// }


const personOne = new Users("kenne", "mistakenz@ymail.com")


const personTwo = new Users("Dont", "dont@gmail.com")

const personThree = new Admin1("joe", "joe@gmail.com", "Manager")


console.log(personOne, personTwo, personThree)



personTwo.login1().logout()



