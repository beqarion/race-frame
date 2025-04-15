import { garageControls } from "../../../components/garage/garage-controls/garageControls";
import { ControlButtons } from "./ControlButtons/ControlButtons";
import { ControlForm } from "./ControlForm/ControlForm";

export class GarageControls {
  constructor(parent) {
    this.parent = parent;

    this.element = garageControls();
    this.controlForm = new ControlForm(this);
    this.controlButtons = new ControlButtons(this);

    this.element.append(this.controlForm.element, this.controlButtons.element);
  }
}
