function rellenar() {
    let itemsCotizables = parseInt(prompt("Ingrese la cantidad de items a cotizar."), 10);
    let elementosCampos = document.getElementsByClassName("campo")
    let indiceCampos = 0
    while (indiceCampos < itemsCotizables) {
        elementosCampos[indiceCampos].className = 'campo$ campo hab'
        indiceCampos = indiceCampos + 1
    }
    let cotBoton = document.getElementById("btnCotPes")
    cotBoton.className = 'btnHab buttonComprar btn btn-success'
    let cotBoton2 = document.getElementById("btnCotDol")
    cotBoton2.className = 'btnHab buttonComprar btn btn-success'
}


function cotizarPesos() {
    let indiceCampos = 0
    let sumaTotal = 0
    let elementosCampos = document.getElementsByClassName("hab")
    let itemsCotizables = elementosCampos.length
    while (indiceCampos < itemsCotizables) {
        sumaTotal = (sumaTotal + (parseInt(elementosCampos[indiceCampos].children[1].value)))
        indiceCampos = indiceCampos + 1;
    }
    alert('Su cotización total es de ' + (sumaTotal) + ' pesos.')
}

function cotizarDolar() {
    let indiceCampos = 0
    let sumaTotal = 0
    let elementosCampos = document.getElementsByClassName("hab")
    let itemsCotizables = elementosCampos.length
    while (indiceCampos < itemsCotizables) {
        sumaTotal = (sumaTotal + (parseInt(elementosCampos[indiceCampos].children[1].value)))
        indiceCampos = indiceCampos + 1;
    }

    var requestURL = ('https://api.exchangerate.host/convert?from=ARS&to=USD&amount=' + sumaTotal);
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var response = request.response;
        alert('El valor en dólares por el total de ' + sumaTotal + ' pesos es de ' + response.result + ' USD.');
    }
}










