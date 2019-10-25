let person = {
  name: "andy",
  age: 18,
  login: function() {
    console.log(`${this.name} successfully logged in.`);
  },
  logout: function() {
    console.log(`${this.name} successfully logged out.`);
  }
};

console.log(person); // show how it has an Object __proto__
console.log(person.name);
console.log(person.age);
person.login(); // show how 'this' works inside of an object
person.logout();

console.log(this); // show how 'this' outside in a js file is a window object

let num = 12973376993498234;
let numStr = num.toLocaleString("fullwide", { useGrouping: false });
let highest = numStr.slice(0, 2);
for (i = 1; i < numStr.length; i++) {
  if (Number(numStr.slice(i, i + 2)) > highest) {
    highest = Number(numStr.slice(i, i + 2));
  }
}
console.log(highest);
