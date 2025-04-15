import { garage } from "../../components/garage/garage";
import { loadingComponent } from "../../components/loading/loading";
import { pagination } from "../../components/pagination/pagination";
import { garageAPI } from "../../services/fetch-api";
import { GarageControls } from "./GarageControls/GarageControls";
import { Tracks } from "./Tracks/Tracks";

const PAGE_LIMIT = 10;

export class Garage {
  constructor() {
    this.cars = [];
    this.page = 1;
    this.pageLimit = PAGE_LIMIT;
    this.selectedCar = null;

    this.element = loadingComponent();

    this.initialize();
  }

  async initialize() {
    await this.loadCars();

    const { element, center } = garage();
    this.element.replaceWith(element);
    this.element = element;

    this.controls = new GarageControls(this);
    this.tracks = new Tracks(this);

    const paginate = pagination();

    center.append(this.controls.element, this.tracks.element, paginate);

    return this;
  }

  async loadCars() {
    const { cars, totalCars } = await garageAPI.getCars(this.page);
    this.cars = cars;
    this.totalCars = totalCars;
  }
}
