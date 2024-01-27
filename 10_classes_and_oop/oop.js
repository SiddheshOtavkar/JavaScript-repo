const user = {
  username: "siddhesh",
  loginCount: 8,
  signedIN: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // return "Bye";
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
    console.log(`Login Count is ${this.loginCount}`);
    console.log(`Are you logged in: ${this.isLoggedIn}`);
  };
  return this;
}

const userOne = new User("Siddhesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// console.log("----------------------------------------------");
// userOne.greeting(); 
// console.log("----------------------------------------------");
// userTwo.greeting();
console.log("----------------------------------------------");

// console.log(userOne.constructor);
console.log(userOne);
console.log("----------------------------------------------");
console.log(userTwo);
