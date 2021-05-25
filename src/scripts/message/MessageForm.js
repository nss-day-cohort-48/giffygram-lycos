import { getUsers, fetchUsers } from "../data/provider.js";


export const MessageForm = () => {

    const users = getUsers()

    let html = " <div class = 'directMessage'> "
    html += "<h2> Direct Message </h2>"

    html += "<h3> Recipient </h3>"

    html += "Choose a recipient <select id='messageUserSelection'>"
    html += users.map((user) => {
        return `
            <option id="user--${user.id}">${user.name}</option>
            `
    }
    )
    html += "</select>"
    
    html+= "<h3> Message </h3>";

    html+= "<textArea> Type message here </textArea>"


    

    html+= "<button> Send </button>"
    

    html+= "<button> Abort </button>";

    
    // <button onclick="myFunction()">Send</button>
    
    
    html += "</div>"

   


    return html
    
}



   

export const Footer = () => {

    let html = yearsDropdown()

    html += UserDropDown()

    html += likesCheckbox()

    return html
}