import "./resetcss.css";
import "./styles.css";

import tabHome from "./tab-home.js";
import tabMenu from "./tab-menu.js";
import tabContacts from "./tab-contacts.js";
import tabAbout from "./tab-about.js";
import {btn_home, btn_menu, btn_contacts, btn_about} from "./navigation.js";
import btn_all from "./navigation.js";

const contentElement = document.querySelector("#content");
const navigationMenu = document.querySelector("nav");

for (let index = 0; index < btn_all.length; index++) {
    const element = btn_all[index];
    
    element.addEventListener("click", (e)=>{
        updatePageContent(allWebsiteContent[e.target.id]);
    });

    element.setAttribute("id", "btn-" + element.textContent)
}

const allWebsiteContent = {
    [btn_home.id]:tabHome,
    [btn_menu.id]:tabMenu,
    [btn_contacts.id]:tabContacts,
    [btn_about.id]:tabAbout,
};

navigationMenu.appendChild(btn_home);
navigationMenu.appendChild(btn_menu);
navigationMenu.appendChild(btn_contacts);
navigationMenu.appendChild(btn_about);

function updatePageContent(newContentObject){
    contentElement.textContent = "";

    contentElement.appendChild(newContentObject.tabName);
    contentElement.appendChild(newContentObject.header);
    contentElement.appendChild(newContentObject.contents);
};

//first time page content load
updatePageContent(allWebsiteContent[btn_home.id]);