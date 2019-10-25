class Header {
  constructor(companyName) {
    this.companyName = companyName;
  }
  render() {
    return `<header class="header">
      <h1 class="header__company-name">${this.companyName}</h1>
    </header>`;
  }
}
