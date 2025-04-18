import { createNavbar } from "./components/nav/nav.js";
import { pagination } from "./components/pagination/pagination.js";
import { winners } from "./components/winners/winners.js";

import { router } from "./services/router.js";

import { Garage } from "./classes/Garage/Garage.js";
import { underConstruction } from "./components/modal/under-construction.js";

const container = document.querySelector(".container");
container.replaceChildren();

const view = document.createElement("div");
view.className = "view";

const routes = { garage: Garage, winners: winners() };

router(routes, view);

container.append(createNavbar(), view, underConstruction());
