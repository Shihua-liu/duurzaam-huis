

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
<<<<<<< HEAD
xmlhttp3.open("GET", "http://31684.hosts1.ma-cloud.nl/BO3/vermogen/standen2json.php", true);
=======
xmlhttp3.open("GET", "http://localhost/BO3/vermogen/standen2json.php", true);
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
xmlhttp3.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat3(stand) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 430ba5e0fe850dc416787ca7e9b624033ffb4a73
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
    let tekst = '';
    let tekst2 = '';

    for (let count = 0; count < stand.length; count++) {
            tekst = tekst +
                stand[count].apparaat +
                
                '<br>';

            document.getElementById("vermogen").innerHTML = tekst;
        }



    for (let count2 = 0; count2 < stand.length; count2++) {
        tekst2 = tekst2 +
            stand[count2].vermogen +
            ' kwh' +
            '<br>';
        document.getElementById("standen2").innerHTML = tekst2;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> 0d199971b1f103fc59618242142346ec8eda88c8
>>>>>>> 430ba5e0fe850dc416787ca7e9b624033ffb4a73
>>>>>>> 707f1cec545e68b25acb0ecdc839beb79b058b06
}