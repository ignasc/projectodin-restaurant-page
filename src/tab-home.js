const divContent = document.querySelector("#content");
const topTitle = document.createElement("h1");
const subTitle = document.createElement("h2");
const contents = document.createElement("p");

topTitle.textContent = "Welcome to...";
subTitle.textContent = "The Mystic Restaurant...";
contents.textContent = "...where you have no clue what you will order until it's too late!";

function showHomeContent(){
    divContent.textContent = "";
    divContent.appendChild(topTitle);
    divContent.appendChild(subTitle);
    divContent.appendChild(contents);
};

export default showHomeContent;
