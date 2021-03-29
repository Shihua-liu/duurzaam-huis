var plaats;
var datum;
var minimaal;
var maximaal;




// OPEN en verstuur
xmlhttp.open("GET", "http://localhost/BO3/weer/standen2json.php", true);
xmlhttp.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat(stand) {
    let tekst = '';

    for (let count = 0; count < stand.length; count++) {
            tekst = tekst +
                "plaats: " + stand[count].plaats + "<br>" +
                "datum: " + stand[count].datum + "<br>" +
                "minimaal: " + stand[count].minimaal + "&deg;C" + "<br>" +
                "maximaal: " + stand[count].maximaal + "&deg;C" + "<br>"
            document.getElementById("weer").innerHTML = tekst;
        }
}