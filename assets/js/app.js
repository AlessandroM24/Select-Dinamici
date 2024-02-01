let regioniSelect = document.getElementById("regioni");
let provinceSelect = document.getElementById("province");
let comuniSelect = document.getElementById("comuni");

let luoghi = {
    "Lombardia": {
        "Bergamo": {
            "Comuni": ["Arcene", "Ardesio"]
        },
        "Brescia": {
            "Comuni": ["Barghe", "Capriolo"]
        }
    },
    "Piemonte": {
        "Alessandria": {
            "Comuni": ["Balzola", "Camino"]
        },
        "Asti": {
            "Comuni": ["Bubbio", "Cantarana"]
        }
    }
}


const aggiungiRegioni = () => {
    for (let regione in luoghi) {
        var option = document.createElement("option");
        option.value = regione;
        option.text = regione;
        regioniSelect.add(option);
    }
}

const aggiungiProvince = () => {
    let regioneScelta = regioniSelect.value;

    while (provinceSelect.firstChild) {
        provinceSelect.removeChild(provinceSelect.firstChild);
    }

    for (let provincia in luoghi[regioneScelta]) {
        var option = document.createElement("option");
        option.value = provincia;
        option.text = provincia;
        provinceSelect.add(option);
    }

}

const aggiungiComuni = () => {
    let provinciaScelta = provinceSelect.value;
    let regioneScelta = regioniSelect.value;

    while (comuniSelect.firstChild) {
        comuniSelect.removeChild(comuniSelect.firstChild);
    }

    for (let provincia of luoghi[regioneScelta][provinciaScelta].Comuni) {
        var option = document.createElement("option");
        option.value = provincia;
        option.text = provincia;
        comuniSelect.add(option);
    }
}

aggiungiRegioni();