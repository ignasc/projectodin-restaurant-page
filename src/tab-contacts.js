//const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const topTitle = document.createElement("h1");
const contentsLine1 = document.createElement("p");
const contentsLine2 = contentsLine1.cloneNode();
const hiddenContact = contentsLine1.cloneNode();

topTitle.textContent = "The Mysterious Contacts...";
contentsLine1.textContent = "Contacts are a mystery. Some say they don't even exist...";
contentsLine2.textContent = "Or do they...?";
hiddenContact.textContent = "Tel.: 0-800-PEEKABOO";

hiddenContact.setAttribute("id", "hidden-text");

function showContactsContent(){
    divContent.textContent = "";
    divContent.appendChild(topTitle);
    divContent.appendChild(contentsLine1);
    divContent.appendChild(contentsLine2);
    divContent.appendChild(hiddenContact);
};

export default showContactsContent;
