import "./resetcss.css";
import "./styles.css";

import {btn_home, btn_menu, btn_contacts, btn_about} from "./navigation.js";

const navigationMenu = document.querySelector("nav");

navigationMenu.appendChild(btn_home);
navigationMenu.appendChild(btn_menu);
navigationMenu.appendChild(btn_contacts);
navigationMenu.appendChild(btn_about);

//trigger home button to show home page on first page load
btn_home.click();
