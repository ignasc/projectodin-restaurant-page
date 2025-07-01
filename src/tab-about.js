const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabAbout = {tabName, header, contents};

tabName.textContent = "About";
header.textContent = "The Restaurant";
contents.textContent = "About the restaurant just one word - amazing.";

function showAboutContent(){
    divSubRoot.appendChild(tabName);
    divSubRoot.appendChild(header);
    divSubRoot.appendChild(contents);
    
    divContent.textContent = "";
    divContent.appendChild(divSubRoot);
};

export {tabAbout};
export default showAboutContent;
