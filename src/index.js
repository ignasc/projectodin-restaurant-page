import "./resetcss.css";
import "./styles.css";

import tabHome from "./tab-home.js";
import {btn_home, btn_menu, btn_contacts, btn_about} from "./navigation.js";

const contentElement = document.querySelector("#content");
const navigationMenu = document.querySelector("nav");

contentElement.appendChild(tabHome.tabName);
contentElement.appendChild(tabHome.header);
contentElement.appendChild(tabHome.contents);

navigationMenu.appendChild(btn_home);
navigationMenu.appendChild(btn_menu);
navigationMenu.appendChild(btn_contacts);
navigationMenu.appendChild(btn_about);

