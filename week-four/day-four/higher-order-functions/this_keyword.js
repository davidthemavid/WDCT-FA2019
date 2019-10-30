class Animal {
  constructor(name) {
    this.name = name;
    // to keep the context of 'this' keyword
    this.sayName = this.sayName.bind(this);
  }
  sayName(otherName) {
    // console.log(otherName);
    console.log(this);
    console.log(this.name);
  }
}
// create dog type animal
let dog = new Animal("dog");
let cat = new Animal("cat");
// dog.sayName(); // this === dog object
window.addEventListener("click", () => {
  dog.sayName("noor");
});
// cat.sayName(); // this === cat object
