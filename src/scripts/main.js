import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import {
  fetchUsers,
  fetchPosts,
  fetchLikes,
  fetchMessages,
  getUsers,
  getPosts,
} from "./data/provider.js";
import "./auth/Logout.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers()
    .then(fetchPosts)
    .then(fetchLikes)
    .then(fetchMessages)
    .then(() => {
      let users = getUsers();
      const user = parseInt(localStorage.getItem("gg_user"));
      console.log("renderApp invoked");
      if (user) {
        applicationElement.innerHTML = GiffyGram();
      } else {
        applicationElement.innerHTML = LoginForm();
      }
    });
};
console.log("page loaded");
renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  //console.log("state changed, event heard");
  renderApp();
});
