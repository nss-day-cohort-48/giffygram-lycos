import { getUsers, getLikes, getPosts, getCurrentUser } from provider.js

const yearsDropdown = () => {
    return `
    <div class="footer__item footer__years">
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
    const users = getUsers()
    let html = "<div class='footer__item footer__postsByUser'>"
    html += "Posts by user <select id='userSelection'>"
    html += users.map((user) => {
        return `
            <option id="user--${user.id}">${user.name}</option>
            `
    }
    )
}

//need to figure out this is made specific to the User that is logged in.
const filterFavorites = () => {
    let currentUser = getCurrentUser()
    const likes = getLikes()
    for (const like of likes) {
        if (like.userId = currentUser.id) {
            return like
        }
    }
}
//somehwere else we need a function that will display all posts that have a like.postId = post.id

export const Footer = () => {

    let html = "<footer class='footer'>"

    html += yearsDropdown()

    html += UserDropDown()

    html += filterFavorites()

    html = + "</footer>"

    return html
}