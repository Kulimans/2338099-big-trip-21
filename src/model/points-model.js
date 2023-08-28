import { MOCK_POINTS } from '../mock/point';

export default class PointsModel {
  points = MOCK_POINTS;

  getPoints() {
    return this.points;
  }
}
