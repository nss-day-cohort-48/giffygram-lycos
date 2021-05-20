import { NavBar } from "./nav/NavBar.js";
import { MessageForm } from "./message/MessageForm.js";
// import { Footer } from "./nav/Footer.js";

export const GiffyGram = () => {
  // Show main main UI
  return /*html*/ `
    <header class="header">
        <h1 class="title">Giffygram</h1>
    </header>
    
    <div class="navigation">
        ${NavBar()}
    </div>;

    <div class ="messageBox">
        ${MessageForm()}
    </div>`;

  // <footer class="footer">
  //     ${Footer()}
  // </footer>;
};
