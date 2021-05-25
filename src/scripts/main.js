import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";
import { fetchUsers, fetchPosts, fetchLikes, fetchMessages, getUsers, getPosts, setCurrentUser } from "./data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  fetchUsers()
  .then(fetchPosts)
  .then(fetchLikes)
  .then(fetchMessages)
  .then(() => {
    let users = getUsers();

    if (user) {
      // setCurrentUser() //I put this in the getPosts function but we may want it to put it here if using Current User more often.
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

