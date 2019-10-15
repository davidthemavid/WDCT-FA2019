var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];

// traditional
for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}
arr.last = 9;

// for ... in
for (var i in arr) {
  //   console.log(i);
}

// for ... of
for (var i of arr) {
  console.log(i);
}
