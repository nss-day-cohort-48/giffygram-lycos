import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import { fetchUsers, applicationState, fetchMessages, fetchLikes, fetchPosts } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers();
  fetchPosts();
  fetchMessages();
  fetchLikes();
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram()
    console.log(localStorage.getItem("gg_user"))
    // console.log(applicationState);
  } else {
    applicationElement.innerHTML = LoginForm();
  }
};

renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  renderApp();
});

