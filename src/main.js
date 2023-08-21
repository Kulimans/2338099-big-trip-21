import TripInfoView from './view/trip-info-view.js';
import TripfilterView from './view/trip-filters-view.js';
import { render, RenderPosition } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';


const tripContainer = document.querySelector('.trip-events');
const tripElement = document.querySelector('.trip-main');
const tripFilterElement = document.querySelector('.trip-controls__filters');


render(new TripInfoView(), tripElement,RenderPosition.AFTERBEGIN);
render(new TripfilterView(), tripFilterElement);

const tripPresenter = new TripPresenter({tripContainer});

tripPresenter.init();
