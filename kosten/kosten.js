var elekt_laatste;
var water_laatste;
var gas_laatste;
var elek_kost;
var water_kost;
var gas_kost;
const elekt = document.getElementById("elek");
const water = document.getElementById("water");
const gas = document.getElementById("gas");
const button = document.getElementById("submit");
const button_r = document.getElementById("reset");
document.getElementById("reset").style.display = "none"; 

button.addEventListener("click", () => {
    let elekt_stand = parseInt(elekt.value)
    let elek_totaal = elekt_stand - elekt_laatste
    console.log(elek_totaal)

    let water_stand = parseInt(water.value)
    let water_totaal = water_stand - water_laatste
    console.log(water_totaal)

    let gas_stand = parseInt(gas.value)
    let gas_totaal = gas_stand - gas_laatste
    console.log(gas_totaal)
    document.getElementById("kosten2").style.display = "none"; 

    elek_kost = 100 / 22 * elek_totaal;
            
    water_kost = 100 / 80 * water_totaal;
            
    gas_kost = 100 / 76 * gas_totaal;
            
    kost_totaal = elek_kost + water_kost + gas_kost
    console.log(kost_totaal)
    let kost_rond = kost_totaal.toFixed(2);
    document.getElementById("kost").innerHTML = "kosten is momenteel <br>" + kost_rond + " euro"; 
    document.getElementById("reset").style.display = "block"; 
    document.getElementById("kost").style.display = "block"; 
})

button_r.addEventListener("click", () => {
    document.getElementById("kosten2").style.display = "block"; 
    document.getElementById("reset").style.display = "none"; 
    document.getElementById("kost").style.display = "none"; 
})

// MAAK een nieuw request object aan
let xmlhttp = new XMLHttpRequest();

// STATUS bijhouden
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // this.responseText is het teruggekomen JSON resultaat.
        let stand = JSON.parse(this.responseText);

        displayResultaat(stand);

    }
};

// OPEN en verstuur
xmlhttp.open("GET", "http://localhost/BO3/kosten/standen2json.php", true);
xmlhttp.send();

// MAAK het resultaat op basis van de teruggezonden gegevens
function displayResultaat(stand) {
    let tekst = '';

    for (let count = 0; count < stand.length; count++) {
            document.getElementById("standen").innerHTML = tekst;
            if (stand[count].item == "elektriciteit"){
                elekt_laatste = stand[count].stand;
            }
            if (stand[count].item == "water"){
                water_laatste = stand[count].stand;
            }
            if (stand[count].item == "gas"){
                gas_laatste = stand[count].stand;
            }


        }
}

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