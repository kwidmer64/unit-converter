const lengthEl = document.getElementById("length-conversion");
const volumeEl = document.getElementById("volume-conversion");
const massEl = document.getElementById("mass-conversion");
const inputEl = document.getElementById("conversion-input");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function() {
    let inputValue = Number(inputEl.value);
    render(lengthEl, lengthConversion(inputValue));
    render(volumeEl, volumeConversion(inputValue));
    render(massEl, massConversion(inputValue));
});

function lengthConversion(input) {
    let metersToFeet = input * 3.281;
    let feetToMeters = input / 3.281;

    let elementText = `${input} meters = ${metersToFeet.toFixed(3)} feet | ${input} feet = ${feetToMeters.toFixed(3)} meters`;

    return elementText;
}

function volumeConversion(input) {
    let litersToGallons = input / 3.785;
    let gallonsToLiters = input * 3.785;

    let elementText = `${input} liters = ${litersToGallons.toFixed(3)} gallons | ${input} gallons = ${gallonsToLiters.toFixed(3)} liters`;

    return elementText;
}

function massConversion(input) {
    let kilosToPounds = input * 2.205;
    let poundsToKilos = input / 2.205;

    let elementText = `${input} kilos = ${kilosToPounds.toFixed(3)} pounds | ${input} pounds = ${poundsToKilos.toFixed(3)} kilos`;

    return elementText;
}


function render(element, elementText) {
    element.textContent = elementText;
}