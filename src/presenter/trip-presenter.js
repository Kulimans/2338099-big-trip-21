import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditingFormtView from '../view/editing-form-view';
import TripSortingtView from '../view/trip-sorting-view';
import { render, } from '../render';
import DestinationsModel from '../model/destinations-model';

export default class TripPresenter {
  tripListComponent = new PointListView();

  constructor({tripContainer, pointsModel, destinationsModel}) {
    this.pointsModel = pointsModel;
    this.tripContainer = tripContainer;
    this.destinationsModel = destinationsModel;
  }

  init() {
    this.tripPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationsModel.getDestinations()];

    render(new TripSortingtView(), this.tripContainer);
    render(this.tripListComponent, this.tripContainer,);

    render(new EditingFormtView(), this.tripListComponent.getElement());

    for(let i = 0; i < this.tripPoints.length; i++) {
      const point = this.tripPoints[i];
      const destination = this.destinations.find((dest) => dest.id === point.destination);
      render(new PointView({
        destination,
        point,
      }), this.tripListComponent.getElement());
    }
  }
}

