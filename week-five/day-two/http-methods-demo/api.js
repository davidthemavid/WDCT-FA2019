const USERS = "https://jsonplaceholder.typicode.com/users";
const ONE_USER = "https://jsonplaceholder.typicode.com/users/5";
// getting all the users
// axios.get(USERS).then(function(response) {
//   console.log(response.data);
// });

// get one user
let user;
axios.get(ONE_USER).then(response => {
  user = response.data;
});

// create new user
const newUser = {
  name: "noor",
  phone: "123-456-7890",
  email: "n.k@gmail.com"
};
// axios.post(USERS, newUser).then(response => console.log(response.data));
// axios({
//   method: "post",
//   url: USERS,
//   data: newUser,
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// }).then(response => console.log(response.data));

// update user with id 5
// axios({
//   method: "put",
//   url: ONE_USER,
//   data: newUser,
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// }).then(response => console.log(response.data));

// update using PATCH user with id 5
const updatedUser = {
  name: "noor"
};
// axios({
//   method: "patch",
//   url: ONE_USER,
//   data: updatedUser,
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// }).then(response => console.log(response.data));

// delete user with id 5
axios.delete(ONE_USER).then(response => console.log(response.data));
