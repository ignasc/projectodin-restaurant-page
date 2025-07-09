const divContent = document.querySelector("#content");
const topTitle = document.createElement("h1");
const contents = document.createElement("p");

topTitle.textContent = "The Mystic Restaurant";
contents.textContent = "Very little is known about this restaurant. Nobody knows, who the owner is, it has no official records in any places... it is a mystery...";

function showAboutContent(){
    divContent.textContent = "";
    divContent.appendChild(topTitle);
    divContent.appendChild(contents);
};

export default showAboutContent;
