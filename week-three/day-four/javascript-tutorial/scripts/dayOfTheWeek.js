var today = new Date();
console.log(today.getDay());

switch (today.getDay()) {
  case 0:
    console.log("Brunch at Lahori around 11");
  // break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Working with Javascript");
  // break;
  case 5:
    console.log("Weekly social in Student Lounge");
  // break;
  case 6:
    console.log("Hike @ Deep Cove");
  // break;
  default:
    console.log("Invalid day provided");
  // break;
}
