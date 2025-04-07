import { garage } from "./components/garage/garage.js";
import { createNavbar } from "./components/nav/nav.js";
import { pagination } from "./components/pagination/pagination.js";
import { winners } from "./components/winners/winners.js";

const container = document.querySelector(".container");
console.log(container);

container.replaceChildren(createNavbar());
container.append(garage(), winners(), pagination());
