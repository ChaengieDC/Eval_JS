let info = document.createElement("div");

// Application des styles à la nouvelle div
info.style.height = "300px";
info.style.width = "200px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "3px solid gray";
info.style.padding = "16px 12px 24px 12px";

// Pour insérer la div qu'on vient de créer juste avant le bouton:
let boutonMeteo = document.querySelector("button");
boutonMeteo.parentNode.insertBefore(info, boutonMeteo);

// Fonction pour ajouter du texte dans le cadre
function addInfo(dataApi){
    info.innerHTML = `Température actuelle: ${dataApi.current_condition.tmp}°C <br><br>
    Condition actuelle: ${dataApi.current_condition.condition} <br><br>
    Température minimum: ${dataApi.fcst_day_0.tmin}°C <br><br>
    Température maximum ${dataApi.fcst_day_0.tmax}°C`;
}

// Fonction pour ajouter une classe au bouton
function bouton(){
    boutonMeteo.classList.add("button__cardMeteo");
}

// Deux événements pour changer la couleur du bouton au niveau du clic
boutonMeteo.addEventListener("mousedown", () =>{
    boutonMeteo.style.backgroundColor = "orange";
});
document.addEventListener("mouseup", () =>{
    boutonMeteo.style.backgroundColor = "";
});

// Appel de l'API Météo pour insérer les informations:
let contactApi = async () =>{
    let response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
    let dataApi = await response.json();
    addInfo(dataApi);
};
boutonMeteo.addEventListener("click", () =>{
    contactApi();
    bouton();
});