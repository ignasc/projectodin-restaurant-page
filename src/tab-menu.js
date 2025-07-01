const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabMenu = {tabName, header, contents};

tabName.textContent = "Menu";
header.textContent = "The Restaurant";
contents.textContent = "Menu coming soon...";

function showMenuContent(){
    divSubRoot.appendChild(tabName);
    divSubRoot.appendChild(header);
    divSubRoot.appendChild(contents);
    
    divContent.textContent = "";
    divContent.appendChild(divSubRoot);
};

export {tabMenu};
export default showMenuContent;
