/*submitted form box*/
const submittedFormBox = document.getElementById('submitted-form')

/*form elements*/
const formElements = {
  firstName: document.getElementById('firstName').value,
  lastName: document.getElementById('lastName').value,
  age: document.getElementById('age').value,
  birthDate: document.getElementById('birthDate').value,
  gender: document.querySelectorAll('[name=gender]').value,
  title: document.querySelectorAll('[title]').value,
  subject: document.querySelectorAll('[subject]'),
  submitBtn: document.querySelector('[submit]')
}

/*select employment option*/
const selectNo = document.getElementById("no");
const selectYes = document.getElementById("yes");
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
calcItems.calcBtn.addEventListener('click', () => {
    const hours = parseFloat(calcItems.hoursValue.value)
    const rate = parseFloat(calcItems.rateValue.value)
    let result = parseFloat(hours * rate)

    calcItems.totalOutput.value =  `R${result}`
    console.log(result)
})

/*submitting the form*/
formElements.submitBtn.addEventListener('click', (event) => {
  //prevents form default behavior if inputs are invalid
  event.preventDefault()

  let subjectsArray = []

  formElements.subject.forEach(item => {
    if(item.checked){
      subjectsArray.push(item.value)
    }
  })

  // const selectedGender = [...formElements.gender].find(val => val.checked)?.value || 'Not specified'
  const employmentStatus = selectYes.checked ? 'Employed' : 'Not employed'

  submittedFormBox.innerHTML = `
    <div>
      <h2>Form Details</h2>
      <p>First name: ${formElements.firstName}</p>
      <p>Last name: ${formElements.lastName}</p>
      <p>Age: ${formElements.age}</p>
      <p>Date of birth: ${formElements.birthDate}</p>
      <p>Selected gender: ${formElements.gender? formElements.gender : 'None selected'}</p>
      <p>Subject(s): ${subjectsArray.length > 0 ? subjectsArray.join(', ') : 'No subject selected'}</p>
      <p>Employment status: ${employmentStatus}</p>
    </div>
  `
})