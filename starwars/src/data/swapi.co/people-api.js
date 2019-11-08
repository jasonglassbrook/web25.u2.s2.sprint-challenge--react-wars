import SWAPI from "./api.js";

const API = {
  "base_url" : `${SWAPI.base_url}people/`,
  "query_url" : function (query) {
    let params = "";
    if (query.id !== undefined) {
      params = `${query.id}/`;
    }
    return (`${this.base_url}${params}?format=json`);
  },
};

export default API;