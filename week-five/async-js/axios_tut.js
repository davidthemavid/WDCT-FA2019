let something = axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then(response => console.log(response.data));
