import dishMenuDB from "./dishMenuDB";

const divContent = document.querySelector("#content");
const topTitle = document.createElement("h1");
const contents = document.createElement("ul");
const menuListItem = document.createElement("li");
const menuListItemTitle = document.createElement("h3");
const menuListItemDesc = document.createElement("p");

topTitle.textContent = "The Mystic Menu...";

for (let index = 0; index < dishMenuDB.length; index++) {
    const newItem = menuListItem.cloneNode();
    const newTitle = menuListItemTitle.cloneNode();
    const newDesc = menuListItemDesc.cloneNode();

    newTitle.textContent = dishMenuDB[index]["title"];
    newDesc.textContent = dishMenuDB[index]["desc"];
    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    contents.appendChild(newItem);
};


function showMenuContent(){
    divContent.textContent = "";
    divContent.appendChild(topTitle);
    divContent.appendChild(contents);
};

export default showMenuContent;
