const baseUrl = window.location.hostname + ':3000';

function searchCandidates(byResult = false) {
    var byCity = false 
    if (byResult) {
        var url = `http://${baseUrl}/candidates?elected=${byResult}`;
    } else {
        let { filter, name } = getFilters();
        var url = `http://${baseUrl}/${filter}?name=${name}`;
        byCity = filter === 'cities' ? true : false;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        clearTable();
        if (byCity) {
            var countVotes = 0;
            data.forEach(candidate => {
                countVotes += candidate.cand_votos;
                addRow(candidate);
            });
            addRowVotes(countVotes);
        } else {
            data.forEach(candidate => addRow(candidate));
        }
    })
    .catch(error => console.error(error));
}

function searchSelectOptions() {
    let filter = getFilters().filter;
    let select = document.getElementById('selectName');
    let url = `http://${baseUrl}/list/${filter}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        select.innerHTML = '';  
        data.forEach(option => {
            let newOption = createSelectOption(option);
            select.appendChild(newOption);
        });
        searchCandidates();
    });
}

function createSelectOption(option) {
    let newOption = document.createElement('option');
    newOption.innerText = option.nome;
    newOption.value = option.nome;

    return newOption;
}

function onChangeFilter() {
    const FOR_SELECT = ['offices', 'cities'];
    let filter = getFilters().filter;
    
    let inputName = document.getElementById('inputName');
    let selectName = document.getElementById('selectName');
    if (FOR_SELECT.includes(filter)) {
        selectName.classList.remove('visually-hidden');
        inputName.classList.add('visually-hidden');
        inputName.value = '';
        searchSelectOptions();
    } else {
        inputName.classList.remove('visually-hidden');
        selectName.classList.add('visually-hidden');
        selectName.value = '';
    }
}

function onChangePage(page) {
    
    let inputDiv = document.getElementById('inputDiv');
    let selectDiv = document.getElementById('selectDiv');
    let btnGroup = document.getElementById('btnGroup');

    if (page === "home") {
        inputDiv.classList.remove('visually-hidden');
        selectDiv.classList.remove('visually-hidden');
        btnGroup.classList.add('visually-hidden');
    } else {
        btnGroup.classList.remove('visually-hidden');
        inputDiv.classList.add('visually-hidden');
        selectDiv.classList.add('visually-hidden');
        searchCandidates('all');
    }
}
