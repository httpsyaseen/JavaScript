import icon from "url:../../img/icons.svg";

export default class View {
  _parentElement;
  _data;

  render(recipe) {
    this._data = recipe;
    this._generateMarkup();
  }

  renderError() {
    this._parentElement.innerHTML = `
          <div class="error">
            <div>
              <svg>
                <use href="${icon}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
          </div> `;
  }

  renderSpinner() {
    this._clear();
    const markup = `<div class="spinner">
          <svg>
            <use href="${icon}#icon-loader"></use>
          </svg>
        </div> `;
    this._parentElement.innerHTML = markup;
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
