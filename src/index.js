import "./resetcss.css";
import "./styles.css";

import {pageLoadedMessage, functionMessage} from "./pageLoad.js";
import {tabName, header, contents} from "./tab-home.js";

console.log(pageLoadedMessage);

const contentElement = document.querySelector("#content");

contentElement.appendChild(tabName);
contentElement.appendChild(header);
contentElement.appendChild(contents);

functionMessage();
