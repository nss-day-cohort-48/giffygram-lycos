import { getUsers, fetchUsers, sendMessage } from "../data/provider.js";


export const MessageForm = () => {

    const users = getUsers()

    let html = " <div class = 'directMessage'> "
    html += "<h2> Direct Message </h2>"

    html += "<h3> Recipient </h3>"

    html += "Choose a recipient <select id='messageUserSelection'>"
    html += users.map((user) => {
        return `
            <option value="${user.id}" id="user--${user.id}">${user.name}</option>
            `
    }
    )
    html += "</select>"
    
    html+= "<h3> Message </h3>";

    html+= "<textArea placeholder='Type message here' id='messageField'></textArea>"


    

    html+= '<button id="sendMessageButton"> Send </button>'
    

    html+= '<button id="abortMessageButton"> Abort </button>';

    
    
    html += "</div>"

   


    return html
    
}

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "sendMessageButton") {
      
        const currentUser = parseInt(localStorage.getItem("gg_user"));
        const messageRecipientId = document.querySelector("#messageUserSelection");
        const messageRecipientIdNumber = parseInt(messageRecipientId.value);
        const textMessageField = document.querySelector("#messageField").value;
        
        
        const sendNewMessageToApi = {
        
            userId: currentUser,
            recipientId: messageRecipientIdNumber,
            text: textMessageField,
            read: false,
     
        };
         sendMessage(sendNewMessageToApi);

        document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    }
  });

  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "abortMessageButton") {
      
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    }
    });