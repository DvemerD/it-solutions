function form() {
  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("error-message");
  const btn = document.getElementById("btn_submit");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  btn.addEventListener("click", () => {
    if (validateEmail(emailInput.value)) {
      console.log("Subscribed email:", emailInput.value);
      emailInput.value = "";
      errorMessage.textContent = "";
      alert("Thank you for subscribing!");
    } else {
      errorMessage.textContent = "Please enter a valid email address.";
    }
  });

  emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) {
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "Please enter a valid email address.";
    }
  });
}

export default form;
