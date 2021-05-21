import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { MessageForm } from "./message/MessageForm.js";
import { Footer } from "./nav/Footer.js";
import { PostCreator } from "./feed/PostCreator.js";

export const GiffyGram = () => {
  // Show main main UI
  return /*html*/ `
    <header class="header">
        <div class="navigation">
            ${NavBar()}
        </div>
        <div>
            ${MessageForm()}
        </div>
    </header>
    

    <div class="feed">
      ${PostCreator()}
        ${PostList()}
    </div>;


    <footer class="footer">
        ${Footer()}
    </footer>;`;
};
