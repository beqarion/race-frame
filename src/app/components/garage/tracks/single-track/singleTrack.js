import carUrl from "../../../../../assets/images/car.svg";
import flagUrl from "../../../../../assets/images/flag-checkered.svg";
import { carImg } from "../../../../utils/carImgCreator";

import "./singleTrack.css";

export const singleTrack = ({ name, color, id }) => {
  const track = document.createElement("div");
  track.setAttribute("data-id", id);
  track.className = "track";

  const trackControls = document.createElement("div");
  trackControls.className = "track-controls";

  const selectButton = document.createElement("button");
  selectButton.className = "btn track-select";
  selectButton.textContent = "select";

  const removeButton = document.createElement("button");
  removeButton.className = "btn track-remove";
  removeButton.textContent = "remove";

  const trackName = document.createElement("span");
  trackName.textContent = name;

  trackControls.append(selectButton, removeButton, trackName);

  const carControls = document.createElement("div");
  carControls.className = "car-controls";

  const carAButton = document.createElement("button");
  carAButton.className = "car-A";
  carAButton.textContent = "a";

  const carBButton = document.createElement("button");
  carBButton.className = "car-B";
  carBButton.textContent = "b";

  carControls.append(carAButton, carBButton);

  const car = document.createElement("div");
  car.className = "car";

  car.innerHTML = carImg(color);

  const flag = document.createElement("div");
  flag.className = "flag";

  const flagImage = document.createElement("img");
  flagImage.src = flagUrl;
  flagImage.alt = "a flag";

  flag.append(flagImage);

  track.append(trackControls, carControls, car, flag);

  return track;
};
