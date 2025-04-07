import { garageControls } from "./garage-controls/garageControls";
import { tracks } from "./tracks/tracks";

import "./garage.css";

export const garage = () => {
  const garage = document.createElement("article");
  garage.className = "garage";

  const center = document.createElement("div");
  center.className = "center garage-center";

  const controls = garageControls();
  const tracksSection = tracks();

  center.append(controls, tracksSection);
  garage.append(center);
  garage.hidden = true;

  return garage;
};
