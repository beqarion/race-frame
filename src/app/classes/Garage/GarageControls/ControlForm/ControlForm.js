import { controlsForm } from "../../../../components/garage/garage-controls/control-form/controlsForm";
import { garageAPI } from "../../../../services/fetch-api";

export class ControlForm {
  constructor(parent) {
    this.parent = parent;
    this.element = controlsForm(this.parent.parent.selectedCar);
    this.#bindEvents();
  }
  #bindEvents() {
    const createCarBtn = this.element.querySelector("#createCarBtn");
    const updateCarBtn = this.element.querySelector("#updateCarBtn");

    const garage = this.parent.parent;

    createCarBtn.addEventListener("click", async () => {
      const formData = new FormData(this.element);
      const formObj = Object.fromEntries(formData.entries());

      await garageAPI.createCar({
        name: formObj.createNameInput,
        color: formObj.createColorInput,
      });

      await garage.initialize();
    });

    updateCarBtn.addEventListener("click", async () => {
      const formData = new FormData(this.element);
      const formObj = Object.fromEntries(formData.entries());

      if (!garage.selectedCar) throw new Error("The car wasnt selected");
      await garageAPI.updateCar(garage.selectedCar.id, {
        name: formObj.updateNameInput,
        color: formObj.updateColorInput,
      });
      garage.selectedCar = null;
      await garage.initialize();
    });
  }
}
