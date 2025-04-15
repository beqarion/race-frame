import { controlsForm } from "./control-form/controlsForm";
import { controlButtons } from "./control-buttons/controlButtons";

export const garageControls = () => {
  const controlContainer = document.createElement("section");
  controlContainer.className = "garage-controls";

  return controlContainer;
};
