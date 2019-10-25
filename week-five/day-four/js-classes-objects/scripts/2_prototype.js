// use this to explain how prototypes work
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sessions = 0;
}

// all the methods below should show up
// as part of __proto__ type and not as part of
// Person type
Person.prototype.login = () => {
  console.log(`${this.name} successfully logged in.`);
  this.sessions++;
  return this;
};
Person.prototype.logout = () => {
  console.log(`${this.name} successfully logged out.`);
  return this;
};
Person.prototype.totalSessions = () => {
  let timesText = this.sessions > 1 ? "times" : "time";
  console.log(`${this.name} logged in ${this.sessions} ${timesText}`);
  return this;
};
let personOne = new Person("andy", 18);
let personTwo = new Person("shane", 24);

console.log(personOne, personTwo);
