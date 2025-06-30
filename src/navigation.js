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


export {btn_home, btn_menu, btn_contacts, btn_about};
export default btn_all;
