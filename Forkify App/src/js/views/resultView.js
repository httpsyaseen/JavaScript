import View from "./view";
import icon from "url:../../img/icons.svg";

class resultView extends View {
  _data;
  _parentElement = document.querySelector(".results");

  constructor() {
    super();
    this._parentElement.addEventListener("click", this._activeHandler);
  }

  _generateMarkup() {
    this._clear();
    this._parentElement.innerHTML = this._data
      .map((item) => {
        return `<li class="preview">
                <a class="preview__link " href="#${item.id}">
                  <figure class="preview__fig">
                    <img src="${item.image_url}" alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${item.title}</h4>
                    <p class="preview__publisher">${item.publisher}</p>
                    <div class="preview__user-generated">
                      <svg>
                        <use href="${icon}#icon-user"></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>`;
      })
      .join("");
  }

  _activeHandler(e) {
    document
      .querySelector(".preview__link--active")
      ?.classList.remove("preview__link--active");
    e.target.closest(".preview").classList.add("preview__link--active");
  }
}

export default new resultView();
