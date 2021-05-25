import { getUsers, getLikes, fetchLikes, fetchUsers, setChosenUser, filterByYear, makeApplicationStatePosts, setChosenYear } from "../data/provider.js";
// import { getCurrentUser  } from "./data/provider.js";


//Jan 1 timestamps for each year from https://www.unixtimestamp.com/index.php

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "yearSelection") {
            if (event.target.value === "2021") {
                setChosenYear(1609480800)
                // makeApplicationStatePosts(filterByYear(1609480800))
            } else if (event.target.value === "2020") {
                setChosenYear(1577858400)
            } else if (event.target.value === "2019") {
                setChosenYear(1546322400)
            } else if (event.target.value === "2018") {
                setChosenYear(1514786400)
            } else if (event.target.value === "2017") {
                setChosenYear(1483250400)
            } else {
                setChosenYear(0)
            }
        }
    }
)

const yearsDropdown = () => {
  return `
    <div class="footer__item">
    Post since <select id="yearSelection">
    <option name="yearSelection" value="allYears">Display All</option>
    <option name="yearSelection" value="2021">2021</option>
    <option name="yearSelection" value="2020">2020</option>
    <option name="yearSelection" value="2019">2019</option>
    <option name="yearSelection" value="2018">2018</option>
    <option name="yearSelection" value="2017">2017</option>
    </select>
    </div> 
    `;
};

document.addEventListener(
    "change",
    (event) => {
        const users = getUsers()
        if (event.target.name === "selectedUser") {
            const [, selectedUserId] = event.target.value.split("--")
            setChosenUser(parseInt(selectedUserId))
        }
    }
)

const UserDropDown = () => {
    const users = getUsers()
    let html = "<div class='footer__item footer__postsByUser'>"
    html += "Posts by user <select id='userSelection'>"
    html += users.map((user) => {
        return `
            <option name="selectedUser" value="user--${user.id}">${user.name}</option>
            `
    }
    )
    html += "</select>"
    html += "</div>"
    return html
}

// const filterByAuthor = (authorId) => {

// }

//need to figure out this is made specific to the User that is logged in.
const filterFavorites = () => {
  let likedPosts = [];
  const currentUserId = localStorage.getItem("gg_user");
  console.log(currentUserId);
  const likes = getLikes();
  for (const like of likes) {
    if ((like.userId = currentUserId)) {
      likedPosts.push(like);
    }
  }
  return likedPosts;
};

const likesCheckbox = () => {
  return `
<div class="footer__item likes__checkbox">
<label for="likesCheckbox">Show only favorites:</label>
<input type="checkbox" id="likesCheckbox">
</div> 
`;
};
//somehwere else we need a function that will display all posts that are in the likedPosts array.

export const Footer = () => {
  let html = yearsDropdown();

  html += UserDropDown();

  html += likesCheckbox();

  return html;
};
