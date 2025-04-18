import { singleTrack } from "../../../../components/garage/tracks/single-track/singleTrack";
import { engineAPI, garageAPI } from "../../../../services/fetch-api";
import { animateCar } from "../../../../utils/animateCar";

export class SingleTrack {
  constructor(car, parent) {
    this.car = car;
    this.parent = parent;
    this.element = singleTrack(this.car);

    this.#bindEvents();
  }

  #bindEvents() {
    // DOM el-s
    const selectBtn = this.element.querySelector(".track-select");
    const removeBtn = this.element.querySelector(".track-remove");
    const startBtn = this.element.querySelector(".car-A");
    const stopBtn = this.element.querySelector(".car-B");
    // car
    const carEl = this.element.querySelector(".car");

    const trackId = +this.element.dataset.id;
    const garage = this.parent.parent;

    selectBtn.addEventListener("click", async () => {
      const selectedCar = garage.cars.find((c) => c.id === trackId);

      garage.selectedCar = selectedCar;
      garage.initialize();
    });

    removeBtn.addEventListener("click", async () => {
      await garageAPI.deleteCar(trackId);
      await garage.initialize();
    });

    startBtn.addEventListener("click", async () => {
      const { velocity, distance } = await engineAPI.startEngine(this.car.id);
      const time = distance / velocity;
      let startX = 80;
      const endX = this.element.getBoundingClientRect().width - 80;

      const animation = animateCar(carEl, startX, endX, time);
    });
  }
}
