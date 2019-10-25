let listedCompanies = [];
const URL = "https://api.iextrading.com/1.0/ref-data/symbols";
axios.get(URL).then(response => {
  listedCompanies = response.data.sort(() => 0.5 - Math.random()).slice(0, 100);
  listedCompanies.forEach(company => {
    createdCompanyCard(company);
  });
});

function createdCompanyCard(company) {
  let card = document.createElement("div");
  card.setAttribute("id", company.symbol);
  let companyName = document.createElement("h3");
  let companyAcronym = document.createElement("h4");
  let companyValuation = document.createElement("span");

  card.classList.add("listed-companies__card");
  companyName.classList.add("company-name");
  companyAcronym.classList.add("company-acronym");
  companyValuation.classList.add("company-valuation");

  companyName.innerText = company.name || "No Name Found";
  companyAcronym.innerText = company.symbol || "N/A";
  companyValuation.innerText = company.iexId || "No ID Found";

  card.appendChild(companyName);
  card.appendChild(companyAcronym);
  card.appendChild(companyValuation);

  let listedCompanies = document.querySelector(".listed-companies");
  listedCompanies.appendChild(card);
}

function searchCompany(event) {
  let searchTerm = event.target.value;
  let listedCompaniesContainer = document.querySelector(".listed-companies");
  listedCompaniesContainer.childNodes.forEach(card => {
    if (card.id.toLowerCase().indexOf(searchTerm) <= -1) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}
let searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", event => {
  event.preventDefault();
  searchCompany(event);
});
