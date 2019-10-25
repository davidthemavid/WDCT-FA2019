// emphasize usage of classes when creating different variants of Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sessions = 0;
  }
  login() {
    console.log(`${this.name} successfully logged in.`);
    this.sessions++;
    return this; // show how to do method chaining
  }
  logout() {
    console.log(`${this.name} successfully logged out.`);
    return this;
  }
  // use this method to explain method chaining
  totalSessions() {
    let timesText = this.sessions > 1 ? "times" : "time";
    console.log(`${this.name} logged in ${this.sessions} ${timesText}`);
    return this;
  }
}

// Classes are syntactic sugar for prototypes.
// new keyword creates an {} object,
// sets value of 'this' to be that new empty object &
// calls constructor function to initialize all properties for 'this'
let personOne = new Person("andy", 18);
let personTwo = new Person("shane", 24);

console.log(personOne, personTwo);
console.log(
  `personOne Name: ${personOne.name} personOne Age: ${personOne.age}`
);
console.log(
  `personTwo Name: ${personTwo.name} personTwo Age: ${personTwo.age}`
);
personOne
  .login()
  .logout()
  .login()
  .logout();
personTwo.login().logout();

personOne.totalSessions();
personTwo.totalSessions();
