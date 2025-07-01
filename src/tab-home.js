const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabHome = {tabName, header, contents};

tabName.textContent = "Home";
header.textContent = "The Restaurant";
contents.textContent = "Welcome to the coolest restaurant in the whole universe!";

function showHomeContent(){
    divSubRoot.appendChild(tabName);
    divSubRoot.appendChild(header);
    divSubRoot.appendChild(contents);
    
    divContent.textContent = "";
    divContent.appendChild(divSubRoot);
};

export {tabHome};
export default showHomeContent;
