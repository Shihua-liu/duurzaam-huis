

// MAAK een nieuw request object aan
let xmlhttp3 = new XMLHttpRequest();

// STATUS bijhouden
xmlhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // this.responseText is het teruggekomen JSON resultaat.
        let stand = JSON.parse(this.responseText);

        displayResultaat3(stand);

    }
};


// OPEN en verstuur
xmlhttp3.open("GET", "http://localhost/BO3/vermogen/standen2json.php", true);
xmlhttp3.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat3(stand) {

}