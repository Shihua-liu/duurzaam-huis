// MAAK een nieuw request object aan
let xmlhttp4 = new XMLHttpRequest();

// STATUS bijhouden
xmlhttp4.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // this.responseText is het teruggekomen JSON resultaat.
        let stand = JSON.parse(this.responseText);

        displayResultaat4(stand);

    }
};


// OPEN en verstuur
xmlhttp4.open("GET", "http://localhost/BO3/standen/standen2json.php", true);
xmlhttp4.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat4(stand) {
    let tekst3 = '';
    let tekst4 = '';

    for (let count = 0; count < stand.length; count++) {
            tekst3 = tekst3 +
                stand[count].meter +
                
                '<br>';

            document.getElementById("metingen").innerHTML = tekst3;
        }
    for (let count2 = 0; count2 < stand.length; count2++) {
        tekst4 = tekst4 +
            stand[count2].standen +
            '<br>';
        document.getElementById("metingen2").innerHTML = tekst4;
    }
    
}