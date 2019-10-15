function alphabeticOrder(inputString) {
  return inputString
    .split("")
    .sort()
    .join("");
}
alphabeticOrder("brainstation");
