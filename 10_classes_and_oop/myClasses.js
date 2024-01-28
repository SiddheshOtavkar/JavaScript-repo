// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const firstName = new User("siddhesh", "siddhesh@gmail.com", "123")

// console.log(firstName.encryptPassword());
// console.log(firstName.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const secondName = new User("Rahul", "rahul@gmail.com", "456")

console.log(secondName.encryptPassword());
console.log(secondName.changeUsername());
