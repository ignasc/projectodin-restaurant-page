//const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabAbout = {tabName, header, contents};

tabName.textContent = "About..";
header.textContent = "The Mystic Restaurant";
contents.textContent = "There is only one very important thing to know about the mysterious restaurant. And that is...";

function showAboutContent(){
    divContent.textContent = "";
    divContent.appendChild(tabName);
    divContent.appendChild(header);
    divContent.appendChild(contents);
};

export {tabAbout};
export default showAboutContent;
