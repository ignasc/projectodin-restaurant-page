const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabContacts = {tabName, header, contents};

tabName.textContent = "Contacts";
header.textContent = "The Restaurant";
contents.textContent = "Contacs coming soon...";

const divElement = document.querySelector("#content");
function showContactsContent(){
    divElement.textContent = "";

    divElement.appendChild(tabName);
    divElement.appendChild(header);
    divElement.appendChild(contents);
};

export {tabContacts};
export default showContactsContent;
