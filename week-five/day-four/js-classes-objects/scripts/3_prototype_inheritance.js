// use this to explain how prototypes work
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sessions = 0;
}

// all the methods below should show up
// as part of __proto__ type and not as part of
// Person type
Person.prototype.login = function() {
  console.log(`${this.name} successfully logged in.`);
  this.sessions++;
  return this;
};
Person.prototype.logout = function() {
  console.log(`${this.name} successfully logged out.`);
  return this;
};
Person.prototype.totalSessions = function() {
  let timesText = this.sessions > 1 ? "times" : "time";
  console.log(`${this.name} logged in ${this.sessions} ${timesText}`);
  return this;
};

function Admin(name, age, secretKey) {
  // here this refers to Admin type.
  // as we ended up in this constructor function
  // when new admin was created.
  // 'this' is passed to Person constructor then to attach
  // relevant properties from Person to 'this' instance of Admin
  Person.call(this, name, age);
  this.secretKey = secretKey;
}

// doing this will set Person as prototype for Admin and will
// allow Admin to inherit all the methods as well from Person
Admin.prototype = Object.create(Person.prototype);

// just doing this won't have functions from Person type as
// prototype of Admin is not set and will be Object and not Person
Admin.prototype.resetSessionsByPerson = function(person) {
  person.sessions = 0;
  return this;
};

let personOne = new Person("andy", 18);
let personTwo = new Person("shane", 24);
let admin = new Admin("admin", 30, "uweposdfpij");
console.log(personOne, personTwo, admin);
personOne
  .login()
  .logout()
  .login()
  .logout();
console.log(personOne);
admin.login().resetSessionsByPerson(personOne);
console.log(personOne);
admin.logout();
