const holderName = document.getElementById("holderName");
const cardNumber = document.getElementById("cardNumber");
const expMonth = document.getElementById("exp.month");
const expYear = document.getElementById("exp.year");
const cvc = document.getElementById("cvc");
const frontName = document.getElementById("frontname");
const frontNumber = document.getElementById("frontnumber");
const frontExpDate = document.getElementById("frontexpdate");
const backcvc = document.getElementById("backcvc");

function submitButton(e) {
  e.preventDefault();
  validateInputs();
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
};

const validateInputs = () => {
  const holderNameValue = holderName.value.trim();
  const cardNumberValue = cardNumber.value.trim();
  const expMonthValue = expMonth.value.trim();
  const expYearValue = expYear.value.trim();
};

if (holderNameValue === "") {
  setError(holderName, "CardHolder name is required");
} else {
  setSuccess(holderName);
}

if (cardNumberValue === "") {
  setError(cardNumber, "Cardnumber is required");
} else {
  setSuccess(cardNumber);
}
