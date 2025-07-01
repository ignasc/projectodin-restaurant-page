import showHomeContent from "./tab-home";
import showMenuContent from "./tab-menu";
import showContactsContent from "./tab-contacts";
import showAboutContent from "./tab-about";

const btn_home = document.createElement("button");
const btn_menu = document.createElement("button");
const btn_contacts = document.createElement("button");
const btn_about = document.createElement("button");

const btn_all = [
    btn_home,
    btn_menu,
    btn_contacts,
    btn_about,
];

btn_home.textContent = "Home";
btn_menu.textContent = "Menu";
btn_contacts.textContent = "Contacts";
btn_about.textContent = "About";

for (let index = 0; index < btn_all.length; index++) {
    const element = btn_all[index];
    
    element.setAttribute("id", "btn-" + element.textContent)
};

btn_home.addEventListener("click", (e)=>{
    showHomeContent();
    setActiveButtonStyle(e.target.id);
});
btn_menu.addEventListener("click", (e)=>{
    showMenuContent();
    setActiveButtonStyle(e.target.id);
});
btn_contacts.addEventListener("click", (e)=>{
    showContactsContent();
    setActiveButtonStyle(e.target.id);
});
btn_about.addEventListener("click", (e)=>{
    showAboutContent();
    setActiveButtonStyle(e.target.id);
});

function setActiveButtonStyle(id){
    for (let index = 0; index < btn_all.length; index++) {
        const element = btn_all[index];
        
        if(element.id == id){
            element.setAttribute("class","btn-content-active");
        } else {
            element.setAttribute("class","btn-content-inactive")
        };
    };
};

export {btn_home, btn_menu, btn_contacts, btn_about};
export default btn_all;
