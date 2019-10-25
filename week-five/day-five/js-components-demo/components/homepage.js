class HomePage {
  constructor() {
    this.header = new Header("POTATO COMPANY");
    this.footer = Footer;
  }
  render() {
    return `
            <div class="container">
                ${this.header.render()}
                ${this.footer()}
            </div>
        `;
  }
}

let app = document.getElementById("app");
let homepage = new HomePage();
app.innerHTML = homepage.render();
