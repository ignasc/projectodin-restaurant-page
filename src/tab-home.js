const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabHome = {tabName, header, contents};

tabName.textContent = "Home";
header.textContent = "The Restaurant";
contents.textContent = "Welcome to the coolest restaurant in the whole universe!";

const divElement = document.querySelector("#content");
function showHomeContent(){
    divElement.textContent = "";

    divElement.appendChild(tabName);
    divElement.appendChild(header);
    divElement.appendChild(contents);
};

export {tabHome};
export default showHomeContent;
