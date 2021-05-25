import { sendPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const PostCreator = () => {
  let html = /*html*/ `
    
      <section class="newPost">
        <div>
            <input value="" name="newPostTitle" class="newPost__input" type="text">
        </div>
      <section class="">
        <input value="" name="newPostURL" class="newPost__input" type="text" placeholder="URL of GIF">
      </section>
        <textarea value="" name="newPostDescription" class="newPost__description" placeholder="Caption your GIF"></textarea>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
      </section>
      
      `;
  return html;
};

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitPostButton") {
    const newPostTitle = document.querySelector();
    const newPostURL = document.querySelector("input[name='postURL']").value;
    const newPostDescription = document.querySelector(
      "textarea[name='newPostDescription']"
    ).value;

    const currentUserId = parseInt(localStorage.getItem("gg_user"));

    const sendNewPostToApi = {
      title: newPostTitle,
      imageURL: newPostURL,
      description: newPostDescription,
      userId: currentUserId,
    };

    sendPost(sendNewPostToApi);
  }
});
