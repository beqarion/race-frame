import carUrl from "../../../../../assets/images/car.svg";
import flagUrl from "../../../../../assets/images/flag-checkered.svg";

import "./singleTrack.css"

export const singleTrack = () => {
  const track = document.createElement("div");
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
  trackName.textContent = "Tesla";

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

  const carImage = document.createElement("img");
  carImage.src = carUrl;
  carImage.alt = "a car";

  car.append(carImage);

  const flag = document.createElement("div");
  flag.className = "flag";

  const flagImage = document.createElement("img");
  flagImage.src = flagUrl;
  flagImage.alt = "a flag";

  flag.append(flagImage);

  track.append(trackControls, carControls, car, flag);

  return track;
};
