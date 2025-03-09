import TripPresenter from '../src/presenter/trip-presenter.js';


const headerElement = document.querySelector('.trip-main');
const mainElement = document.querySelector('.trip-events');
const contorlsElement = headerElement.querySelector('.trip-controls__filters');

const tripPresenter = new TripPresenter(
  {
    headerContainer: headerElement,
    mainContainer: mainElement,
    contolsFilter: contorlsElement
  }
);

tripPresenter.init();
