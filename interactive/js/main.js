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

const blockVsFlexContainer = document.getElementById("b-vs-f-container");
const blockButton = document.getElementById("block-btn");
const flexButton = document.getElementById("flex-btn");

blockButton.addEventListener("click", (e) => {
  blockVsFlexContainer.style.display = "block";
});

flexButton.addEventListener("click", (e) => {
  blockVsFlexContainer.style.display = "flex";
});