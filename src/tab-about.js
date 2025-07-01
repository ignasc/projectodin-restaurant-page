const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabAbout = {tabName, header, contents};

tabName.textContent = "About";
header.textContent = "The Restaurant";
contents.textContent = "About the restaurant just one word - amazing.";

const divElement = document.querySelector("#content");
function showAboutContent(){
    divElement.textContent = "";

    divElement.appendChild(tabName);
    divElement.appendChild(header);
    divElement.appendChild(contents);
};

export {tabAbout};
export default showAboutContent;
