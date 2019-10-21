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
function createEducator(educator, callBack) {
  setTimeout(() => {
    educators.push(educator);
    callBack();
  }, 2000);
}
// getEducators();

// no brackets for getEducators callback as it is
// supposed to be called inside of createEducator
createEducator({ name: "Jonathan", course: "web dev" }, getEducators);
