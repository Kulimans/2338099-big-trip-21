import TripInfoView from './view/trip-info-view.js';
import TripfilterView from './view/trip-filters-view.js';
import { render, RenderPosition } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';

const tripContainer = document.querySelector('.trip-events');
const tripElement = document.querySelector('.trip-main');
const tripFilterElement = document.querySelector('.trip-controls__filters');
const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();

render(new TripInfoView(), tripElement,RenderPosition.AFTERBEGIN);
render(new TripfilterView(), tripFilterElement);

const tripPresenter = new TripPresenter({tripContainer, pointsModel,destinationsModel});

tripPresenter.init();
