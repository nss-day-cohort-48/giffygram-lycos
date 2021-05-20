import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { NavBar } from "./nav/NavBar.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
    // } if else {
    //   applicationElement.innerHTML = NavBar();
    // } else {
    //    applicationElement.innerHTML = Footer();
    //  }
    // else {
    //   applicationElement.innerHTML = Footer();
    // }
  }
};
