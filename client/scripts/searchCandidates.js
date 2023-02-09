const baseUrl = window.location.hostname + ':3000';

function searchCandidates() {
    let { filter, name } = getFilters();
    let url = `http://${baseUrl}/${filter}?name=${name}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        clearTable();
        data.forEach(candidate => addRow(candidate));
    })
    .catch(error => console.error(error));
}

function searchSelectOptions() {
    let filter = getFilters().filter;
    let select = document.getElementById('name');
    let url = `http://${baseUrl}/list/${filter}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        select.innerHTML = '';  
        data.forEach(option => {
            let newOption = createSelectOption(option);
            select.appendChild(newOption);
        });
    });
}

function createSelectOption(option) {
    let newOption = document.createElement('option');
    newOption.innerText = option.nome;
    newOption.value = option.nome;

    return newOption;
}

function setup() {
    let selectName = document.getElementById("name");
    let filterName = document.getElementById("filter");

    selectName.addEventListener("change", searchCandidates);
    filterName.addEventListener("change", searchSelectOptions);
    searchSelectOptions();
}

window.addEventListener("load", setup);
