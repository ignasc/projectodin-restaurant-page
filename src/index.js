import "./resetcss.css";
import "./styles.css";

import {tabName, header, contents} from "./tab-home.js";
import {btn_home, btn_menu, btn_contacts, btn_about} from "./navigation.js";

const contentElement = document.querySelector("#content");
const navigationMenu = document.querySelector("nav");

contentElement.appendChild(tabName);
contentElement.appendChild(header);
contentElement.appendChild(contents);

navigationMenu.appendChild(btn_home);
navigationMenu.appendChild(btn_menu);
navigationMenu.appendChild(btn_contacts);
navigationMenu.appendChild(btn_about);

