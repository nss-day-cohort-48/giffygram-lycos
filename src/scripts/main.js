import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import { fetchUsers } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers();
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }
};

renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  renderApp();
});
