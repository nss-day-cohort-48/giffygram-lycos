import { getUsers, getLikes, fetchLikes, fetchUsers} from "/scripts/data/provider.js";
// import { fgetCurrentUser  } from "./data/provider.js";


const yearsDropdown = () => {
    return `
    <div class="footer__item">
    Post since <select id="yearSelection">
    <option>2021</option>
    <option>2020</option>
    <option2019</option>
    <option>2018</option>
    <option>2017</option>
    </select>
    </div> 
    `}


const UserDropDown = () => {
    // Our getUsers is not working yet.
    const users = getUsers()

    // // This array is temporary data to test.
    // const users = [
    //     {id: 1, name: "Bill"},
    //     {id: 2, name: "Bob"},
    //     {id: 3, name: "Bettie"}
    // ]
    console.log(users)
    let html = "<div class='footer__item footer__postsByUser'>"
    html += "Posts by user <select id='userSelection'>"
    html += users.map((user) => {
        return `
            <option id="user--${user.id}">${user.name}</option>
            `
    }
    )
    html += "</select>"
    html += "</div>"
    return html
}

//need to figure out this is made specific to the User that is logged in.
const filterFavorites = () => {
    let likedPosts = []
    const currentUserId = localStorage.getItem("gg_user")
    console.log (currentUserId)
    const likes = getLikes()
    for (const like of likes) {
        if (like.userId = currentUserId) {
            likedPosts.push(like)
        }
    } return likedPosts
}

const likesCheckbox = () => {
return `
<div class="footer__item likes__checkbox">
<label for="likesCheckbox">Show only favorites:</label>
<input type="checkbox" id="likesCheckbox">
</div> 
`
}
//somehwere else we need a function that will display all posts that are in the likedPosts array.

export const Footer = () => {

    let html = yearsDropdown()

    html += UserDropDown()

    html += likesCheckbox()

    return html
}