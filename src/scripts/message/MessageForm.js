


export const MessageForm = () => {
    return ` <div class="class = directMessage">
        <h2>Direct Message</h2>
        <h3>Recipient:</h3>
        <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Choose a recipient</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#1">Link 1</a>
    <a href="#2">Link 2</a>
    <a href="#3">Link 3</a>
  </div>
</div>
        <fieldset>
            <input id="chooseRecipient" placeholder="Choose a recipient" type="dropdown" />
        </fieldset>
        <h3>Message:</h3>
        <fieldset>
            <input id="userMessage" placeholder="Message to user" type="text" />
        </fieldset>
            <button onclick="myFunction()">Save</button>
        <button onclick="myFunction()">Cancel</button></div>
    `
}