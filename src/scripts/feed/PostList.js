import { fetchPosts, getPosts, getUsers } from "../data/provider.js";

export const PostList = () => {
  let posts = getPosts(); 
  const likes = getUsers();

  //in here is where we want to decide about filtering

  // See ERD for class naming and variable naming
  let html = /*html*/ `
        <div class="feed">
            ${posts
              .map((post) => {
                return ` 
                    <section class="post">
                        <h2 class="post__title">${post.title}</h2>

                        <img class="post__image" src="${post.imageURL}">

                        <div class="post__description">${post.description}</div>

                        <div class="post__favoriteButton">
                            <div>
                                <img class="favoriteIcon" src="./images/favorite-star-blank.svg"></img>
                            </div>
                        </div>

                    </section>
                    `;
              })
              .join("")}
            </div>
            `;
  return html;
};
