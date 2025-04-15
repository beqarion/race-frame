import { tracks } from "../../../components/garage/tracks/tracks";
import { SingleTrack } from "./SingleTrack/SingleTrack";

export class Tracks {
  constructor(parent) {
    this.parent = parent;
    this.singleTracks = [];
    const { element, tracksContainer } = tracks(this.parent.totalCars);
    this.element = element;
    this.tracksContainer = tracksContainer;
    this.render();
  }
  render() {
    this.parent.cars.forEach((car) => {
      const singleTrack = new SingleTrack(car, this.parent);
      this.tracksContainer.append(singleTrack.element);
      this.singleTracks.push(singleTrack);
    });
  }
}
