import "./resetcss.css";
import "./styles.css";

import showHomeContent from "./tab-home";
import showMenuContent from "./tab-menu";
import showContactsContent from "./tab-contacts";
import showAboutContent from "./tab-about";

//import {btn_home, btn_menu, btn_contacts, btn_about} from "./navigation.js";

const navigationMenu = document.querySelector("nav");

const allContent = {
    "btn-home": showHomeContent,
    "btn-menu": showMenuContent,
    "btn-contacts": showContactsContent,
    "btn-about": showAboutContent,
};

const btn_all = document.querySelectorAll("nav > button");

for (let index = 0; index < btn_all.length; index++) {
    const element = btn_all[index];

    element.addEventListener("click", (e)=>{
        loadPageContent(e.target.id);
        setActiveTab(e.target.id);
    });
}

function loadPageContent(id){
    allContent[id]();
};

function setActiveTab(id){
    for (let index = 0; index < btn_all.length; index++) {
        const element = btn_all[index];
        
        if (element.id == id) {
            element.style.backgroundColor = "var(--tab-active-color)";
        } else {
            element.style.backgroundColor = "var(--main-bg-color)";
        }
    }
};

//trigger home button to show home page on first page load
btn_all[0].click();
