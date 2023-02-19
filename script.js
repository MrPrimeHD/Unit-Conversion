/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertButton = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
let number = 0;
convertButton.addEventListener("click", function() {
    number = parseFloat(document.getElementById("conversion-value").value.toString());

    length.textContent = `${number} meters = ${(number * 3.2808).toFixed(3)} feet | ${number} feet = ${(number / 3.2808).toFixed(3)} meters`;
    volume.textContent = `${number} liters = ${(number * 0.26417).toFixed(3)} gallons | ${number} gallons = ${(number / 0.26417).toFixed(3)} liters`;
    mass.textContent = `${number} kilograms = ${(number * 2.2046).toFixed(3)} pounds | ${number} pounds = ${(number / 2.2046).toFixed(3)} kilograms`;
});
