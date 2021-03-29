let temperatuur = 9;
const tempuit = document.getElementById("temperatuur");
const cirkelBoog = document.getElementById("rond");
const thermos = document.getElementById("thermo");



// temperatuur = thermos.value;

const uitvoeren = (temp) =>{
    tempuit.innerHTML = temp;
    let boog = temp * 100/31;
    cirkelBoog.style.strokeDasharray = `${boog} ${100 - boog}`;
}

const animeeruitvoer = (temp) =>{
    let t = 0;
    const timer = setInterval( () =>{
        if (t <= temp) {
            uitvoeren(t);
            t++;
        } else {
            clearInterval(timer);
        }
        
    }, 25)
    
}
animeeruitvoer(thermos.value);

thermos.addEventListener("change", () =>{
    animeeruitvoer(thermos.value);
});