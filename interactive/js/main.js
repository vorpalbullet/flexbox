"use strict"

const containerWidthInput = document.getElementById("container-width-input");
const containerWidthOutput = document.getElementById("container-width-output");
const container = document.getElementById("container");

// console.log(containerWidthInput.value);

containerWidthInput.addEventListener("input", (event) => {
  // do stuff
  // console.log(containerWidthInput.value);
  containerWidthOutput.innerHTML = containerWidthInput.value;
  container.style.width = containerWidthInput.value + "px";
});