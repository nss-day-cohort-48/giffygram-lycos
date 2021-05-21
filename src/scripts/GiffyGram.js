import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
// import { Footer } from "./nav/Footer.js";

export const GiffyGram = () => {
  // Show main main UI
  return /*html*/ `
    <header class="header">
        <h1 class="navbar"></h1>
        <div class="navigation">
            ${NavBar()}
        </div>;
    </header>
    

    <div class="feed">
        ${PostList()}
    </div>;
    `;

  // <footer class="footer">
  //     ${Footer()}
  // </footer>;
};
