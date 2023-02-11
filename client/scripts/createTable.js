function getFilters() {
  let filter = document.getElementById("filter").value;
  let input = document.getElementById("inputName").value;
  let select = document.getElementById("selectName").value;
  let name = select || input;

  return { filter, name };
}

function addRow(candidate) {
  let table = document.querySelector("tbody");
  let tfoot = document.querySelector("tfoot");
  tfoot.classList = "visually-hidden";

  let row = document.createElement("tr");
  for (let [name, value] of Object.entries(candidate)) {
      let candidateData = document.createElement("td");
      if (name === 'cand_status')
        value = value == 1 ? 'Eleito' : 'Não eleito';
      candidateData.textContent = value;
      row.appendChild(candidateData);
  }
  table.appendChild(row);
}

function addRowVotes(votes) {
  let table = document.querySelector("tbody");
  let row = document.createElement("tr");

  let tdLabel = document.createElement("td");
  tdLabel.textContent = 'TOTAL DE VOTOS';
  tdLabel.colSpan = 2;

  let tdVotes = document.createElement("td");
  tdVotes.textContent = votes;
  tdVotes.colSpan = 2;

  row.appendChild(tdLabel);
  row.appendChild(tdVotes);
  table.appendChild(row);
}

function clearTable() {
  let table = document.querySelector("tbody");
  let tfoot = document.querySelector("tfoot");

  table.innerHTML = "";
  tfoot.classList.remove("visually-hidden");
}
