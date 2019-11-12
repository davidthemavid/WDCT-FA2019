console.log("coming from a node program");

let tick = 0;

let clock = setInterval(() => {
  tick += 2;
  if (tick > 10) {
    clearInterval(clock);
  } else {
    console.log(tick + " seconds ago");
  }
}, 2000);

console.log(__dirname);
console.log(__filename);
