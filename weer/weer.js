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
<<<<<<< HEAD
xmlhttp2.open("GET", "http://31684.hosts1.ma-cloud.nl/BO3/weer/standen2json2.php", true);
=======
xmlhttp2.open("GET", "http://localhost/BO3/weer/standen2json.php", true);
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
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
<<<<<<< HEAD
            let tekst3 = "volgende dag";
        document.getElementById("weertekst").innerHTML = tekst3 
=======
<<<<<<< HEAD
            let tekst3 = "volgende dag";
        document.getElementById("weertekst").innerHTML = tekst3 
=======
<<<<<<< HEAD
            let tekst3 = "volgende dag";
        document.getElementById("weertekst").innerHTML = tekst3 
=======
<<<<<<< HEAD
            let tekst3 = "volgende dag";
        document.getElementById("weertekst").innerHTML = tekst3 
=======
            
>>>>>>> 5e0db23a464cda53ac66db1b2b72dfc3329fc49b
>>>>>>> 0d199971b1f103fc59618242142346ec8eda88c8
>>>>>>> 430ba5e0fe850dc416787ca7e9b624033ffb4a73
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
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