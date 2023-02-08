function getFilters() {
    let filter = document.getElementById("filter").value;
    let name = document.getElementById("name").value;

    return { filter, name };
}

function searchCandidates() {
    let { filter, name } = getFilters();
    let baseUrl = window.location.hostname + ':3000';
    let url = `http://${baseUrl}/candidates?filter=${filter}&name=${name}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        clearTable();
        data.forEach(candidate => addCandidate(candidate));
    })
    .catch(error => console.error(error));
}

function addCandidate(candidate) {
    let table = document.querySelector("tbody");
    let tfoot = document.querySelector("tfoot");
    tfoot.classList = "visually-hidden";

    let candidateRow = document.createElement("tr");
    for (let value of Object.values(candidate)) {
        let candidateData = document.createElement("td");
        candidateData.textContent = value;
        candidateRow.appendChild(candidateData);
    }
    table.appendChild(candidateRow);
}

function clearTable() {
    let table = document.querySelector("tbody");
    let tfoot = document.querySelector("tfoot");

    table.innerHTML = "";
    tfoot.classList.remove("visually-hidden");
}

function setup() {
    let inputName = document.getElementById("name");
    let filterName = document.getElementById("filter");

    inputName.addEventListener("input", searchCandidates);
    filterName.addEventListener("change", searchCandidates);
}

window.addEventListener("load", setup);
