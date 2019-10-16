const rsvps = [];

function validateData(event) {
  let courseSelection = event.target.course.value;
  let firstName = event.target.firstname.value;
  let lastName = event.target.lastname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let password = event.target.password.value;
  let confirmedPassword = event.target.confirm.value;
  let passwordSame =
    !!password && !!confirmedPassword && password === confirmedPassword;

  let termsChecked = event.target.terms.checked;

  return (
    !!courseSelection &&
    !!firstName &&
    !!lastName &&
    !!email &&
    !!phone &&
    !!passwordSame &&
    !!termsChecked
  );
}
// use DOM APIs to get access to form element
const form = document.getElementById("signupForm");
form.addEventListener("submit", submitEvent => {
  // prevent page refresh
  submitEvent.preventDefault();
  let isValidData = validateData(submitEvent);
  if (isValidData) {
    let countries = document.getElementById("countries");
    let selectedCountry = countries[countries.selectedIndex].value;

    let rsvp = {};
    rsvp.course = submitEvent.target.course.value;
    rsvp.firstName = submitEvent.target.firstname.value;
    rsvp.lastName = submitEvent.target.lastname.value;
    rsvp.email = submitEvent.target.email.value;
    rsvp.phone = submitEvent.target.phone.value;
    rsvp.country = selectedCountry;

    rsvps.push(rsvp);

    let table = document.querySelector("table");
    // need only the keys for creating table head
    let rsvpKeys = Object.keys(rsvps[0]);

    createTable(table, rsvp);
    if (rsvps.length === 1) {
      createTableHead(table, rsvpKeys);
    }
  } else {
    let alert = document.querySelector(".alert");
    alert.style.display = "block";
  }

  // clear the form once submitted successfully
  submitEvent.target.reset();
});
