import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { RegisterForm } from "./auth/Register.js";
import {
  fetchUsers,
  fetchPosts,
  fetchLikes,
  fetchMessages,
} from "./data/provider.js";
import "./auth/Logout.js";
import "./auth/Register.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));
  const newUser = parseInt(localStorage.getItem("gg_newUser"));
  fetchUsers()
    .then(fetchPosts)
    .then(fetchLikes)
    .then(fetchMessages)
    .then(() => {
      console.log("renderApp invoked");
      if (user) {
        applicationElement.innerHTML = GiffyGram();
      } else if (newUser) {
        applicationElement.innerHTML = RegisterForm();
      } else {
        applicationElement.innerHTML = LoginForm();
       // } else {
      //   applicationElement,innerHTML = MessageForm();
      }
    });
  console.log("page loaded");
};
applicationElement.addEventListener("stateChanged", (customEvent) => {
  console.log("state changed, event heard");
  renderApp();
});

renderApp();
