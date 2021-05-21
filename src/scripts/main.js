import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import { fetchUsers, fetchMessages, fetchLikes, fetchPosts, getUsers } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers().then(() => {
    let users = getUsers()
    console.log(users) 
    const user = parseInt(localStorage.getItem("gg_user"));

  
    if (user) {
      applicationElement.innerHTML = GiffyGram();
    } else {
      applicationElement.innerHTML = LoginForm();
    }
  })
};

renderApp();

applicationElement.addEventListener("stateChanged", (customEvent) => {
  renderApp();
});

