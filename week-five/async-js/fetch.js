let something = fetch("https://api.github.com/users")
  .then(res => res.json()) // still gives me a promise with data stored as value
  .then(data => console.log(data));
// console.log(something);
//   .then(data => console.log(data));
