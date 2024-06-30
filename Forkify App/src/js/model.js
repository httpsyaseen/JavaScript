import { getJSON } from "./helper";
import { API_URL } from "./config";

export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 0,
  },
};

export const loadRecipe = async function (id) {
  try {
    const { data } = await getJSON(`${API_URL}/${id}`);
    state.recipe = data.recipe;
  } catch (err) {
    throw err;
  }
};

export const loadSearchQuery = async function (query) {
  try {
    const { data } = await getJSON(`${API_URL}?search=${query}`);
    const start = state.search.page * 9;
    const end = (state.search.page + 1) * 9;
    state.search.result = data.recipes.slice(start, end);
  } catch (err) {
    throw err;
  }
};

export const page = function () {};
