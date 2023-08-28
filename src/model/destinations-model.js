import { DESTINATIONS } from '../mock/destination';

export default class DestinationsModel {
  destinations = DESTINATIONS;

  getDestinations() {
    return this.destinations;
  }
}
