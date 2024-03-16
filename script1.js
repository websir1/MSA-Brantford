const form = document.querySelector("form"),
      eField = form.querySelector(".email"),
      eInput = eField.querySelector("input"),
      pField = form.querySelector(".password"),
      pInput = pField.querySelector("input");

// Your hardcoded credentials
const correctEmail = "yourEmail@example.com"; // Replace with your custom email
const correctPassword = "yourPassword"; // Replace with your custom password

form.onsubmit = (e) => {
  e.preventDefault(); // Preventing form submitting
  // If email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => { // Remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  // Validation logic here
  if(eInput.value != correctEmail || pInput.value != correctPassword) {
    // If email or password does not match
    eField.classList.add("error");
    pField.classList.add("error");
    if(eInput.value != correctEmail) {
      let errorTxt = eField.querySelector(".error-txt");
      errorTxt.innerText = "Incorrect email";
    }
    if(pInput.value != correctPassword) {
      let errorTxt = pField.querySelector(".error-txt");
      errorTxt.innerText = "Incorrect password";
    }
  } else {
    // If email and password match
    eField.classList.remove("error");
    pField.classList.remove("error");
    window.location.href = "Home.html"; // Redirect to the next page
  }
};

eInput.onkeyup = () => { checkEmail(); } // Calling checkEmail function on email input keyup
pInput.onkeyup = () => { checkPass(); } // Calling checkPass function on pass input keyup

function checkEmail() { // CheckEmail function
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Pattern for validate email
  if (!eInput.value.match(pattern)) { // If pattern not matched then add error and remove valid class
    eField.classList.add("error");
    eField.classList.remove("valid");
    let errorTxt = eField.querySelector(".error-txt");
    // If email value is not empty then show please enter valid email else show Email can't be blank
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  } else { // If pattern matched then remove error and add valid class
    eField.classList.remove("error");
    eField.classList.add("valid");
  }
}

function checkPass() { // CheckPass function
  if (pInput.value == "") { // If pass is empty then add error and remove valid class
    pField.classList.add("error");
    pField.classList.remove("valid");
  } else { // If pass is not empty then remove error and add valid class
    pField.classList.remove("error");
    pField.classList.add("valid");
  }
}
