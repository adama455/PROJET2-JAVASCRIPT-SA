let bodyEl = document.getElementsByTagName("body")[0];
let titre = document.getElementById("title");
let minuteur = document.getElementById("minuteur");
// let messageEl = document.getElementById("message");
let jj = document.getElementById("jj");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

// get UTC offset once
let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

// const newYear = Date.now() - (dateOffsetInMinutes * uneMinuteEnMs) + 2000;
const newYear = new Date("2023");

const getCountdown = () => {

  let nowDate = Date.now();

  let tempsRestantEnMs = newYear - nowDate + (dateOffsetInMinutes * uneMinuteEnMs);

  console.log(tempsRestantEnMs);

  // jours
  let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);
  
  // heures
  let resteTempsSansJoursMs = tempsRestantEnMs - (nbJours * unJourEnMs);
  let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);
  
  // minutes
  let resteTempsSansHeuresMs = resteTempsSansJoursMs - (nbHeures * uneHeureEnMs);
  let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);
  
  
  // secondes
  let resteTempsSansMinutesMs = resteTempsSansHeuresMs - (nbMinutes * uneMinuteEnMs);
  let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

  jj.textContent = nbJours;
  hh.textContent = nbHeures;
  mm.textContent = nbMinutes;
  ss.textContent = nbSecondes;

  if (tempsRestantEnMs <= 0) {
    clearInterval(countDownInterval);
    // bodyEl.style.backgroundImage = 'url("./newyear.jpg")';
    jj.textContent = 0;
    hh.textContent = 0;
    mm.textContent = 0;
    ss.textContent = 0;
    // titleEl.innerHTML = "Bonne année !!! &#127881;&#127881;";
  }
}

let countDownInterval = setInterval(getCountdown, 1000);

// init
getCountdown();
// alert('ok');