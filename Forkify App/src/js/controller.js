import { recipeView } from "./views/recipeView";
import searchView from "./views/searchView";
import resultView from "./views/resultView";
import * as model from "./model";

// if (hot.module) {
//   hot.module.reload();
// }

async function recipeController() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
}

async function searchResultsController() {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchQuery(query);
    resultView.render(model.state.search.result);
  } catch (error) {
    console.log(error);
    recipeView.renderError();
  }
}

function init() {
  recipeView.eventRender(recipeController);
  searchView.addSearchHandler(searchResultsController);
}

init();
