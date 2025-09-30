"use strict";

const containerWidthInput = document.getElementById("container-width-input");
const containerWidthOutput = document.getElementById("container-width-output");
const container = document.getElementById("container");

containerWidthInput.addEventListener("input", (event) => {
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

const flexDirectionContainer = document.getElementById(
  "flex-direction-container"
);

const flexDirectionSelect = document.getElementById("flex-direction-select");
const justifyContentSelect = document.getElementById("justify-content-select");
const alignItemsSelect = document.getElementById("align-items-select");

flexDirectionSelect.addEventListener("change", (e) => {
  flexDirectionContainer.style.flexDirection = flexDirectionSelect.value;
})

justifyContentSelect.addEventListener("change", (e) => {
  flexDirectionContainer.style.justifyContent = justifyContentSelect.value;
})

alignItemsSelect.addEventListener("change", (e) => {
  flexDirectionContainer.style.alignItems = alignItemsSelect.value;
})