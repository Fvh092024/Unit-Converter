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
  function roundDown(value) {
    return Math.floor(value * 1000) / 1000;
  }
  length.textContent = `${baseValue} meters = ${roundDown(
    baseValue * meterToFeet
  )} feet | ${baseValue} feet = ${roundDown(baseValue * feetToMeter)} meters`;

  volume.textContent = `${baseValue} liters = ${roundDown(
    baseValue * literToGallon
  )} gallons | ${baseValue} gallons = ${roundDown(
    baseValue * gallonToLiter
  )} liters`;

  mass.textContent = `${baseValue} kilos = ${roundDown(
    baseValue * kiloToPound
  )} pounds | ${baseValue} pounds = ${roundDown(
    baseValue * poundToKilo
  )} kilos`;
});
