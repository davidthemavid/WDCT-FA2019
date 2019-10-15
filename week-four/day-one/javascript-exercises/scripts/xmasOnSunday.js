var xmasDate;
for (var year = 1990; year <= 2050; year++) {
  xmasDate = new Date(year, 11, 25);
  if (xmasDate.getDay() === 0) {
    console.log("Xmas was on sunday in year", year);
  }
}
