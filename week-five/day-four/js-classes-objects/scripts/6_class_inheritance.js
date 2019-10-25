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

class Admin extends Person {
  constructor(name, age, secretKey) {
    super(name, age);
    this.secretKey = secretKey;
  }
  resetSessionsByPerson(person) {
    person.sessions = 0;
    return this;
  }
}

let personOne = new Person("andy", 18);
personOne
  .login()
  .logout()
  .login()
  .logout();
console.log(personOne);
let adminPerson = new Admin("admin", 30, "uweposdfpij");
console.log(adminPerson);
adminPerson.resetSessionsByPerson(personOne);
console.log(personOne);
