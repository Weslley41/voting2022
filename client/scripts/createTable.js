
function getFilters() {
  let filter = document.getElementById("filter").value;
  let name = document.getElementById("name").value;

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

function clearTable() {
  let table = document.querySelector("tbody");
  let tfoot = document.querySelector("tfoot");

  table.innerHTML = "";
  tfoot.classList.remove("visually-hidden");
}
