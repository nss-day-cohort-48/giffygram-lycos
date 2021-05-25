import { LoginForm } from "./Login.js";

const applicationElement = document.querySelector(".giffygram");

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logoutButton") {
    localStorage.clear();
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
    console.log("state changed event dispatched");
  }
});
