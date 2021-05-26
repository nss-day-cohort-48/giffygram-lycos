import { sendPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

//This is our form for the posts.
export const PostCreator = () => {
  let html = /*html*/ `
    
      <section class="newPost">
        <div>
          <input value="" name="newPostTitle" class="newPost__input" type="text" placeholder="Title of GIF">
        </div>
      <section class="newPostURL">
        <input value="" name="newPostURL" class="newPost__input" type="text" placeholder="URL of GIF">
      </section>
        <textarea value="" name="newPostDescription" class="newPost__description" placeholder="Caption your GIF"></textarea>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
      </section>
    </section>
      `;
  return html;
};

//event listener for when the button is pressed.
applicationElement.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "newPost__submit") {
    const newPostTitle = document.querySelector("input[name='newPostTitle']").value;
    const newPostURL = document.querySelector("input[name='newPostURL']").value;
    const newPostDescription = document.querySelector(
      "textarea[name='newPostDescription']"
    ).value;

    const currentUserId = parseInt(localStorage.getItem("gg_user"));

    const sendNewPostToApi = {
      title: newPostTitle,
      imageURL: newPostURL,
      description: newPostDescription,
      userId: currentUserId,
      timestamp: Date.now()
    };
    //this function sends the info to the API and renders the page again. 
    sendPost(sendNewPostToApi);
  }
});
