/*submitted form box*/
const submittedFormBox = document.getElementById("submitted-form");

/*form elements*/
const formElements = {
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  age: document.getElementById("age"),
  birthDate: document.getElementById("birthDate"),
  gender: document.querySelectorAll("[name=gender]"),
  title: document.querySelectorAll("[title]"),
  subject: document.querySelectorAll("[subject]"),
  submitBtn: document.querySelector("[submit]"),
  resetBtn: document.querySelector("[reset]"),
};

/*select employment option*/
const selectNo = document.getElementById("no");
const selectYes = document.getElementById("yes");
// const selectRadio = document.querySelector("[name]")
const employmentRadio = document.querySelectorAll("[name=employed]");
const calcBox = document.getElementById("calculate-box");

/*calculation dom elements*/
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

/*calculating salary*/
calcItems.calcBtn.addEventListener("click", () => {
  const hours = parseFloat(calcItems.hoursValue.value);
  const rate = parseFloat(calcItems.rateValue.value);
  let result = parseFloat(hours * rate);

  calcItems.totalOutput.value = `R${result}`;
});

/*clearing submitted form*/
formElements.resetBtn.addEventListener("click", () => {
  submittedFormBox.innerHTML = " ";
});

/*submitting the form*/
submittedFormBox.innerHTML = " ";

formElements.submitBtn.addEventListener("click", (event) => {
  //prevents form default behavior if inputs are invalid
  event.preventDefault();

  let subjectsArray = [];

  formElements.subject.forEach((item) => {
    if (item.checked) {
      subjectsArray.push(item.value);
    }
  });

  let subjectsExist =
    subjectsArray.length > 0 ? subjectsArray.join(", ") : "None selected";

  const firstName = formElements.firstName.value
    ? formElements.firstName.value
    : "No name included";
  const lastName = formElements.lastName.value
    ? formElements.lastName.value
    : "No surname included";
  const age = formElements.age.value
    ? formElements.age.value
    : "No age included";
  const birthDate = formElements.birthDate.value
    ? formElements.birthDate.value
    : "No birth date included";
  const title = formElements.title.value
    ? formElements.title.value
    : "No title included";
  const selectedGender =
    [...formElements.gender].find((val) => val.checked)?.value ||
    "Not specified";

  // let selectedRadio;
  // const employmentStatus = () => {
  //   if (employmentRadio.value) {
  //     if (employmentRadio.value === "yes") {
  //       return (selectedRadio = "Yes");
  //     } else if (employmentRadio.value === "no") {
  //       return (selectedRadio = "No");
  //     }
  //   } else {
  //     return (employmentRadio.value = "Not selected");
  //   }

  //   return selectedRadio;
  // };

  // selectYes.checked ? "Employed" : "Not employed";

  //turned all radio btns in employment section into array and found which one was checked and displayed the selected one
  const employmentStatus = () => {
    const selectedEmployment = [...employmentRadio].find((val) => val.checked);
    return selectedEmployment ? selectedEmployment.value : "Not selected";
  };

  submittedFormBox.innerHTML = `
    <div class="form-details">
      <h2>Form Details</h2>
      <p>First name: ${firstName} </p>
      <p>Last name: ${lastName}</p>
      <p>Age: ${age}</p>
      <p>Date of birth: ${birthDate}</p>
      <p>Title: ${title}</p>
      <p>Selected gender: ${
        selectedGender
        // formElements.gender.checked ? formElements.gender.checked : "None selected"
      }</p>
      <p>Subject(s): ${subjectsExist} </p>
      <p>Employment status: ${employmentStatus()}</p>
    </div>
  `;
});
