function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  // call also holds reference
  // call hamara current exceution kisi dusare ko pass kar deta hai

  //   this.username = username;
  this.email = email;
  this.password = password;
}

const chai = new createUser("siddhesh", "siddhesh@fb.com", "123");
console.log(chai);
