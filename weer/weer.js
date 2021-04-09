var plaats;
var datum;
var minimaal;
var maximaal;
const button2 = document.getElementById("weerknop");
let show =0

// MAAK een nieuw request object aan
let xmlhttp2 = new XMLHttpRequest();

// STATUS bijhouden
xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // this.responseText is het teruggekomen JSON resultaat.
        let stand = JSON.parse(this.responseText);

        displayResultaat2(stand);

    }
};


// OPEN en verstuur
xmlhttp2.open("GET", "http://localhost/BO3/weer/standen2json.php", true);
xmlhttp2.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat2(stand) {
    let tekst = '';
    tekst = tekst +
    "plaats: " + stand[show].plaats + "<br>" +
    "datum: " + stand[show].datum + "<br>" +
    "minimaal: " + stand[show].minimaal + "&deg;C" + "<br>" +
    "maximaal: " + stand[show].maximaal + "&deg;C" + "<br><br>"
    document.getElementById("weer").innerHTML = tekst;


    button2.addEventListener("click", () =>{
        show = show + 1
        if (show == 5){
        let tekst2 = "vorige week";
        document.getElementById("weertekst").innerHTML = tekst2  
        }
        if (show == 6){
            show = 0
            let tekst3 = "volgende dag";
        document.getElementById("weertekst").innerHTML = tekst3 
        }
        let tekst = '';
        tekst = tekst +
        "plaats: " + stand[show].plaats + "<br>" +
        "datum: " + stand[show].datum + "<br>" +
        "minimaal: " + stand[show].minimaal + "&deg;C" + "<br>" +
        "maximaal: " + stand[show].maximaal + "&deg;C" + "<br><br>"
        document.getElementById("weer").innerHTML = tekst;
        console.log(stand)
        
    });
    


}