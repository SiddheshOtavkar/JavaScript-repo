// IIFE = "Immediately Invoked Function Expression."

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// wants our application to run immediately (For example: DB Connection)
// We want our scope and not wanting pollution from global scope

/*

(function() {
  // Code here
})();

 */

((num1, num2) => {
  let res = num1 + num2;
  console.log(`Sum of 2 numvers is: ", ${res}`);
})(6, 8);
