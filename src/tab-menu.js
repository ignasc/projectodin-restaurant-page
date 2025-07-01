const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabMenu = {tabName, header, contents};

tabName.textContent = "Menu";
header.textContent = "The Restaurant";
contents.textContent = "Menu coming soon...";

const divElement = document.querySelector("#content");
function showMenuContent(){
    divElement.textContent = "";

    divElement.appendChild(tabName);
    divElement.appendChild(header);
    divElement.appendChild(contents);
};

export {tabMenu};
export default showMenuContent;
