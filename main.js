const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let fName = document.querySelector(".first-name input");
let lName = document.querySelector(".last-name input");
let email = document.querySelector(".email input");
let pwd = document.querySelector(".password input");
let submit = document.querySelector(".submit");
let inputs = [fName, lName, email, pwd];
let done = false;

submit.addEventListener("click", validateForm);

function validateForm() {
  inputs.forEach((input) =>
    input.parentElement.classList.remove("active")
  );
  let errors = {
    fName: false,
    lName: false,
    email: false,
    pwd: false,
  };
  inputs.forEach((input) => {
    if (!input.value) {
      errors[input.name] = true;
      input.parentElement.classList.add("active");
    }
  });
  if (!emailRegex.test(email.value)) {
    errors[email] = true;
    email.parentElement.classList.add("active");
  }
  done = Object.values(errors).every((entry) =>
    entry ? false : true
  );
  if (done) {
    inputs.forEach((input) => (input.value = ""));
    // AJAX POST Request
  }
}
