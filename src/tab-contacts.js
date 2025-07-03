//const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabContacts = {tabName, header, contents};

tabName.textContent = "Contacts...";
header.textContent = "The Mystic Restaurant";
contents.textContent = "Contacts are a mystery. Some say they don't even exist...";

function showContactsContent(){
    divContent.textContent = "";
    divContent.appendChild(tabName);
    divContent.appendChild(header);
    divContent.appendChild(contents);
};

export {tabContacts};
export default showContactsContent;
