import { getUsers } from "../data/provider.js";

// Log-In Functionality
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "loginButton") {
    let foundUser = null;
    const userState = getUsers();

    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;

    for (const user of userState) {
      if (user.email === email && user.password === password) {
        foundUser = user;
      }
    }

    if (foundUser !== null) {
      localStorage.setItem("gg_user", foundUser.id);
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    }
  }
});

// Register New User Functionality
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "registerNewUser") {
    let newUser = 1;
    localStorage.setItem("gg_newUser", newUser);
    document.querySelector(".giffygram");
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

// Log-In Form
export const LoginForm = () => {
  return /*html*/ `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
            <button id="registerNewUser">New User</button>
        </div>
    `;
};
