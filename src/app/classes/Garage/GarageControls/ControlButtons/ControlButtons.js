import { controlButtons } from "../../../../components/garage/garage-controls/control-buttons/controlButtons";
import { garageAPI } from "../../../../services/fetch-api";
import { generateCarName } from "../../../../utils/carNameGenerator";
import { randomHexColor } from "../../../../utils/randomHexColor";

export class ControlButtons {
  constructor(parent) {
    this.parent = parent;
    this.element = controlButtons();

    this.#bindEvents();
  }

  #bindEvents() {
    const generateCars = this.element.querySelector(".garage-control-generate");
    generateCars.addEventListener("click", async () => {
      const arrayPromises = [];
      for (let i = 0; i < 100; i += 1) {
        const color = randomHexColor();
        const name = generateCarName();

        arrayPromises.push(garageAPI.createCar({ name, color }));
      }
      await Promise.allSettled(arrayPromises);
      await this.parent.parent.initialize();
    });
  }
}
