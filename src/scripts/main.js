import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import { fetchUsers, fetchPosts, fetchLikes, fetchMessages, getUsers, getPosts } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers()
  .then(fetchPosts)
  .then(fetchLikes)
  .then(fetchMessages)
  .then(() => {
    let users = getUsers();

    if (user) {
      applicationElement.innerHTML = GiffyGram();
    } else {
      applicationElement.innerHTML = LoginForm();
    }
  })
};

const user = parseInt(localStorage.getItem("gg_user"));

renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  renderApp();
});

