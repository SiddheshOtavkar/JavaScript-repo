class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const obj1 = new Teacher("Milind", "milind@teacher.com", "123")

// obj1.logMe()
// obj1.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(obj1 instanceof User);