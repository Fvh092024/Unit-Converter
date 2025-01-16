/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-El");
let length = document.getElementById("length-para");
let mass = document.getElementById("mass-para");
let volume = document.getElementById("volume-para");
let convertBtn = document.getElementById("convert-btn");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.78541178;
const kiloToPound = 2.204;
const poundToKilo = 0.45359237;

convertBtn.addEventListener("click", function () {
  let baseValue = parseFloat(inputEl.value);

  if (isNaN(baseValue) || baseValue === "") {
    alert("Please enter a valid number.");
    return;
  }

  length.textContent = `${baseValue} meters = ${
    baseValue * meterToFeet
  } feet | ${baseValue} feet = ${baseValue * feetToMeter} meters`;

  volume.textContent = `${baseValue} liters = ${
    baseValue * literToGallon
  } gallons | ${baseValue} gallons = ${baseValue * gallonToLiter} liters`;

  mass.textContent = `${baseValue} kilos = ${
    baseValue * kiloToPound
  } pounds | ${baseValue} pounds = ${baseValue * poundToKilo} kilos`;
});
