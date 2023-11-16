function validadeEmail(email) {
   if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
      const error = new Error("Email Inválido!");
      error.atInput = "email";
      throw error;
   }
}

function validadePassword(password) {
   if (
      password.length < 8 ||
      !password.match(/[a-z]/) ||
      !password.match(/[A-Z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[^a-zA-Z0-9\s]/)
   ) {
      const error = new Error("Senha Inválida!");
      error.atInput = "password";
      throw error;
   }
}

function resetFormStyles(objectInputs) {
   Object.entries(objectInputs).forEach(([key, value]) => {
      value.classList.remove("success", "error");
      document.querySelector(`#${key}-error`).textContent = "";
   });
}

const userInputs = {
   name: document.querySelector("#user-name"),
   email: document.querySelector("#user-email"),
   password: document.querySelector("#user-password"),
};

const form = document.querySelector("#form-login");

form.addEventListener("submit", (ev) => {
   ev.preventDefault();
   resetFormStyles(userInputs);
   try {
      userInputs.name.classList.add("success");
      validadeEmail(userInputs.email.value);
      userInputs.email.classList.add("success");
      validadePassword(userInputs.password.value);
      userInputs.password.classList.add("success");
   } catch (error) {
      userInputs[error.atInput].classList.add("error");
      document.querySelector(`#${error.atInput}-error`).textContent = error.message;
   }
});
