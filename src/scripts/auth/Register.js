import { registerNewUser } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "registerNewUserButton") {
    const newUserName = document.querySelector("input[name='userName']").value;
    const newUserEmail = document.querySelector("input[name='email']").value;
    const newUserPassword = document.querySelector(
      "input[name='password']"
    ).value;

    const newUser = {
      name: newUserName,
      email: newUserEmail,
      password: newUserPassword,
    };

    if (
      newUserName.length === 0 ||
      newUserEmail.length === 0 ||
      newUserPassword.length === 0
    ) {
      window.alert("Please fill out all fields before registering");
    } else {
      registerNewUser(newUser);
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    }
  } else if (clickEvent.target.id === "cancelButton") {
    localStorage.removeItem("gg_newUser");
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const RegisterForm = () => {
  return /*html*/ `
          <h1>Register Form</h1>
          <div class="registerForm">
              <form>
              <fieldset>
                  <label for="name">Name:</label>
                  <input type="text" name="userName" autofocus placeholder="John Johnson" required />
              </fieldset>
                  <fieldset>
                      <label for="email">Email:</label>
                      <input type="email" name="email" autofocus placeholder="example@email.com" required/>
                  </fieldset>
                  <fieldset>
                      <label for="password">Password:</label>
                      <input type="password" name="password" placeholder="TypePasswordHere" required/>
                  </fieldset>
              </form>
              <button id="registerNewUserButton">Register New User</button>
              <button id="cancelButton">Cancel</button>
      `;
};
