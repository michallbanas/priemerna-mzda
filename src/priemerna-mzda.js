// Calculation and creating new paragraph

let averageSalary = 1133
let percentages = document.getElementById("calculation-percentage")
let salary = document.querySelector(".salary")
let resultField = document.querySelector(".result")

salary.focus()

function calculations () {
    let userSalary = Number(salary.value)
    if (userSalary > 0) {
        let result = ((userSalary / averageSalary)*100).toFixed(2)
        resultField.textContent = ("Zarábate " + result + "% z priemernej mzdy")
    } else {
        resultField.textContent = ("Zadajte číslo väčšie ako 0")
    }
}

percentages.addEventListener("click", calculations)

// Change button color

let changeInputColor = document.getElementById("calculation-percentage")
let changeButtonColor = document.querySelector(".box-2")

function btnColor() {
    changeInputColor.style.backgroundColor = "#1b1a17"
    changeInputColor.style.color = "#f0e3ca"
    changeButtonColor.style.backgroundColor = "#1b1a17"
}
    
changeInputColor.addEventListener("click", btnColor)