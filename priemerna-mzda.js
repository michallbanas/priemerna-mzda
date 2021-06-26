// Výpočet a vytvorenie nového paragpraphu

let priemernáMzda = 1133
let percentá = document.getElementById("výpočet-percentá")
let mzda = document.querySelector(".mzda")
let výsledokPole = document.querySelector(".výsledok")

mzda.focus()

function výpočet () {
    let userMzda = Number(mzda.value)
    if (userMzda > 0) {
        let výsledok = ((userMzda / priemernáMzda)*100).toFixed(2)
        výsledokPole.textContent = ("Zarábate " + výsledok + "% z priemernej mzdy")
    } else {
        výsledokPole.textContent = ("Zadajte číslo väčšie ako 0")
    }
}

percentá.addEventListener("click", výpočet)

// Zmena farby buttonu

let changeInputColor = document.getElementById("výpočet-percentá")
let changeButtonColor = document.querySelector(".box-2")

function zmenaFarby() {
    changeInputColor.style.backgroundColor = "#1b1a17"
    changeInputColor.style.color = "#f0e3ca"
    changeButtonColor.style.backgroundColor = "#1b1a17"
}
    
changeInputColor.addEventListener("click", zmenaFarby)