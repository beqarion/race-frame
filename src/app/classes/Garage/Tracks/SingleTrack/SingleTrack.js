import { singleTrack } from "../../../../components/garage/tracks/single-track/singleTrack";
import { garageAPI } from "../../../../services/fetch-api";

export class SingleTrack {
  constructor(car, parent) {
    this.car = car;
    this.parent = parent;
    this.element = singleTrack(this.car);

    this.#bindEvents();
  }

  #bindEvents() {
    const selectBtn = this.element.querySelector(".track-select");
    const removeBtn = this.element.querySelector(".track-remove");

    const trackId = +this.element.dataset.id;

    selectBtn.addEventListener("click", async () => {
      const selectedCar = this.parent.cars.find((c) => c.id === trackId);

      this.parent.selectedCar = selectedCar;
      this.parent.initialize();
    });

    removeBtn.addEventListener("click", async () => {
      await garageAPI.deleteCar(trackId);
      await this.parent.initialize();
    });
  }
}
