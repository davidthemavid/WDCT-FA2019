// use this to explain how constructor works
// also speak about how this functionh is nothing
// but emulated class
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sessions = 0;

  // all the methods below should show up
  // as part of Person type and not as part of
  // it's __proto__ type
  this.login = () => {
    console.log(`${this.name} successfully logged in.`);
    this.sessions++;
    return this;
  };
  this.logout = () => {
    console.log(`${this.name} successfully logged out.`);
    return this;
  };
  this.totalSessions = () => {
    let timesText = this.sessions > 1 ? "times" : "time";
    console.log(`${this.name} logged in ${this.sessions} ${timesText}`);
    return this;
  };
}

let personOne = new Person("andy", 18);
let personTwo = new Person("shane", 24);

console.log(personOne, personTwo);
