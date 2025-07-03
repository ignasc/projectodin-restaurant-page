//const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabHome = {tabName, header, contents};

tabName.textContent = "Welcome to...";
header.textContent = "The Mystic Restaurant...";
contents.textContent = "...where you have no clue what you will order until it's too late!";

function showHomeContent(){
    divContent.textContent = "";
    divContent.appendChild(tabName);
    divContent.appendChild(header);
    divContent.appendChild(contents);
};

export {tabHome};
export default showHomeContent;
