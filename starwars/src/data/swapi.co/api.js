const API = {
  "base_url" : "https://swapi.co/api/",
  "query_url" : function (query) {
    return (`${this.base_url}?format=json`);
  },
}

export default API;