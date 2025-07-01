const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabContacts = {tabName, header, contents};

tabName.textContent = "Contacts";
header.textContent = "The Restaurant";
contents.textContent = "Contacs coming soon...";

function showContactsContent(){
    divSubRoot.appendChild(tabName);
    divSubRoot.appendChild(header);
    divSubRoot.appendChild(contents);
    
    divContent.textContent = "";
    divContent.appendChild(divSubRoot);
};

export {tabContacts};
export default showContactsContent;
