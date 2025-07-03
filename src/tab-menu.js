//const divSubRoot = document.createElement("div");
const divContent = document.querySelector("#content");
const tabName = document.createElement("h1");
const header = document.createElement("h2");
const contents = document.createElement("p");
const tabMenu = {tabName, header, contents};

tabName.textContent = "Menu...";
header.textContent = "The Mystic Restaurant";

const menuList = document.createElement("ul");
const menuListItem = document.createElement("li");

for (let index = 1; index <= 5; index++) {
    const newItem = menuListItem.cloneNode();
    newItem.textContent = "Mystery dish No." + index;
    menuList.appendChild(newItem);
}

contents.appendChild(menuList);

function showMenuContent(){
    divContent.textContent = "";
    divContent.appendChild(tabName);
    divContent.appendChild(header);
    divContent.appendChild(contents);
};

export {tabMenu};
export default showMenuContent;
