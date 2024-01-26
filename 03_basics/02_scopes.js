// //var c = 300
// let a = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   // console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//   const username = "hitesh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   console.log(website);

//   two();
// }
// one()

// one()

// if (true) {
//   const username = "hitesh";
//   if (username === "hitesh") {
//     const website = " youtube";
//     // console.log(username + website);
//   }
//   // console.log(website);
// }

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
    const res = num + 2;
    console.log(res);
    return res;
};
addTwo(5);
// addTwo(6)
console.log(addTwo(6))

