const educators = [
  { name: "Noor", course: "Web Dev" },
  { name: "Boris", course: "Data Science" },
  { name: "Denise", course: "UX" },
  { name: "Adam", course: "Product Management" }
];

function getEducators() {
  // server takes 2 seconds
  setTimeout(() => {
    let output = "";
    educators.forEach((educator, index) => {
      output += `<li>${index + 1} ${educator.name}</li>`;
    });
    let ul = document.querySelector(".educators");
    ul.innerHTML = output;
  }, 2000);
}

// create new educator and execute the callback to show
// all educators again
function createEducator(educator) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      educators.push(educator);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

// when promise is fulfilled, run anything inside of .then function
// when promise is not successful, run anything inside of .catch function
createEducator({ name: "Jonathan", course: "Web Dev" })
  .then(getEducators)
  .catch(err => console.log(err));
