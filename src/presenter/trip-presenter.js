import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditingFormtView from '../view/editing-form-view';
import TripSortingtView from '../view/trip-sorting-view';
import { render, } from '../render';
//import DestinationsModel from '../model/destinations-model';

export default class TripPresenter {
  tripListComponent = new PointListView();

  constructor({tripContainer, pointsModel, destinationsModel, offersModel}) {
    this.pointsModel = pointsModel;
    this.tripContainer = tripContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationsModel.getDestinations()];
    this.offers = [...this.offersModel.getOffers()];

    render(new TripSortingtView(), this.tripContainer);
    render(this.tripListComponent, this.tripContainer,);

    render(new EditingFormtView(), this.tripListComponent.getElement());

    for(let i = 0; i < this.tripPoints.length; i++) {
      const point = this.tripPoints[i];
      const destination = this.destinations.find((dest) => dest.id === point.destination);
      const offerTape = this.offers.find((off) => off.type === point.type).offers;
      const offersId = offerTape.filter((arr) => id.includes(arr.id));
      console.log(offersId);
      render(new PointView({
        destination,
        point,
      }), this.tripListComponent.getElement());
    }
  }
}

