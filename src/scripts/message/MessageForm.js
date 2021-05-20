


export const DirectMessageForm = () => {
    return `
        <h2>Direct Message</h2>
        <fieldset>
            <input id="recipientName" placeholder="Recipient:" type="text" />
        </fieldset>
        <fieldset>
            <input id="userMessage" placeholder="Message:" type="text" />
        </fieldset>
        <input id="saveButton" placeholder="Save" type="button" />
        </fieldset>
        <input id="cancelButton" placeholder="Cancel" type="button" />
        </fieldset>
    `
}