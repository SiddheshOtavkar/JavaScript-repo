// const user = {
//   username: "hitesh",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai()

// const obj = {
//   arrowMethod: () => {
//     let username = "anuj";
//     console.log(username);
//   },
// };

// obj.arrowMethod();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach()
myArray.forEach((element) => {
  console.log(element);
});
console.log(typeof myArray);

const result = myArray.join(", ");
console.log(result);
console.log(typeof result);
