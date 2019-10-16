function createTable(table, rsvp) {
  let row = table.insertRow();
  for (key in rsvp) {
    let cell = row.insertCell();
    let text = document.createTextNode(rsvp[key]);
    cell.appendChild(text);
  }
}

function createTableHead(table, rsvps) {
  let tHead = table.createTHead();
  let row = tHead.insertRow();
  for (let entry of rsvps) {
    let th = document.createElement("th");
    let text = document.createTextNode(entry);
    th.appendChild(text);
    row.appendChild(th);
  }
}
