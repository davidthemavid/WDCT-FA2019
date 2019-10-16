const regulation = "Slavery is Prohibited";

function UnitedNations() {}

function Canada() {
  // regulation = "Slavery is Awesome";
  let drinkingAge = 21;
  console.log("Canada: ", drinkingAge); // 21
  let province = "BC";
  if (province == "BC") {
    let drinkingAge = 19;
    console.log("BC: ", drinkingAge); // 19
  }
  console.log("Canada After: ", drinkingAge); // 21
  Mexico();
}
function Mexico() {
  let drinkingAge = 10;
  console.log("Mexico: ", drinkingAge);
}

Canada();
