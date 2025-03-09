import SortView from '../view/sort-view.js';
import FilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import RoutePointView from '../view/route-point-view.js';
import EditFormView from '../view/edit-form-view.js';
import CreateEventFormView from '../view/creation-form-view.js';
import { RenderPosition } from '../render.js';
import { render } from '../render.js';


export default class TripPresenter {
  constructor({ headerContainer, mainContainer, contolsFilter }) {
    this.headerContainer = headerContainer;
    this.mainContainer = mainContainer;
    this.contolsFilter = contolsFilter;
  }

  init() {
    // Отрисовываем информацию о путешествии
    render(new TripInfoView(), this.headerContainer, RenderPosition.AFTERBEGIN);

    // Отрисовываем фильтры
    render(new FilterView(), this.contolsFilter, RenderPosition.BEFOREEND);

    // Отрисовываем сортировку
    render(new SortView(), this.mainContainer, RenderPosition.BEFOREEND);

    // Отрисовка формы редактирования
    render(new EditFormView(), this.mainContainer, RenderPosition.BEFOREEND);

    const creationForm = new CreateEventFormView();
    render(creationForm, this.mainContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      // Создаем и отрисовываем точку маршрута
      render(new RoutePointView(), creationForm.getElement(), RenderPosition.BEFOREEND);
    }
  }
}
