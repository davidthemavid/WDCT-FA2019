// fetch github users from github website
// server: www.github.com
let xhr = new XMLHttpRequest();

// open a connection to server for fetching data.
xhr.open("GET", "https://api.github.com/users", true);

// on loading of the xml http request, run this function.
xhr.onload = function() {
  console.log(this);
  if (this.status === 200) {
    // response is JSON.  Convert it to Javascript Objects
    // console.log(this.responseText);
    console.log(JSON.parse(this.responseText));
    setTimeout(() => {
      let output = "";
      JSON.parse(this.responseText).forEach((user, index) => {
        output += `<li>${index + 1} ${user.login}</li>`;
      });
      let ul = document.querySelector(".git-users");
      ul.innerHTML = output;
    }, 2000);
  }
};

// actually make request to my server
xhr.send();
