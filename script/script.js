const selectNo = document.getElementById("no");
const selectYes = document.getElementById("yes");
const calcBox = document.getElementById("calculate-box");

const calcItems = {
  hoursValue: document.getElementById("hours"),
  rateValue: document.getElementById("rate"),
  totalOutput: document.querySelector("[output]"),
  calcBtn: document.querySelector("[calculate]"),
};

/*toggling calculation box*/
calcBox.classList.add("hidden");

selectYes.addEventListener("click", () => {
  if (selectYes.checked) {
    calcBox.classList.remove("hidden");
    calcBox.classList.add("visible");
  }
});

selectNo.addEventListener("click", () => {
  if (selectNo.checked) {
    calcBox.classList.add("hidden");
    calcBox.classList.remove("visible");
  }
});

console.log(document.getElementById("no").value);

/*calculating salary*/
calcItems.calcBtn.addEventListener('click', () => {
    const hours = parseFloat(calcItems.hoursValue.value)
    const rate = parseFloat(calcItems.rateValue.value)
    let result = parseFloat(hours * rate)

    calcItems.totalOutput.value =  R${result}`
    console.log(result)
})
