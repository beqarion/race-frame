import { garage } from "./components/garage/garage.js";
import { createNavbar } from "./components/nav/nav.js";
import { pagination } from "./components/pagination/pagination.js";
import { winners } from "./components/winners/winners.js";

import { router } from "./services/router.js";

const container = document.querySelector(".container");
container.replaceChildren();

const view = document.createElement("div");
const routes = { garage: garage(), winners: winners() };
view.append(routes[window.location.hash.substring(1)] || routes.garage);

router(routes, view);

container.append(createNavbar(), view, pagination());
