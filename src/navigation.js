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

for (let index = 0; index < btn_all.length; index++) {
    const element = btn_all[index];
    
    element.addEventListener("click", (e)=>{
        console.log(e.target.textContent);
    });
}

btn_home.textContent = "Home";
btn_menu.textContent = "Menu";
btn_contacts.textContent = "Contacts";
btn_about.textContent = "About";

export {btn_home, btn_menu, btn_contacts, btn_about};
