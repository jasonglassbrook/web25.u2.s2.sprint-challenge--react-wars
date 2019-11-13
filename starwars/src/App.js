/// external modules ///
import React from "react";

/// internal modules ///
import {fetchData} from "./data/fetch";
import peopleAPI from "./data/swapi.co/people-api";
import PeopleGrid from "./components/PeopleGrid";

/// styles ///
import "./App.css";

/***************************************
  STATES
***************************************/
const init = {
  "people" : {
    "results" : [],
  },
  "query" : {}, // if ever wanted to specify a person's id or something else
};

const fetchPeople = fetchData (peopleAPI , init.people);

/***************************************
  COMPONENTS
***************************************/
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people , setPeople] = React.useState (init.people);
  const [query , setQuery] = React.useState (init.query);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  React.useEffect (() => {
    fetchPeople (query , setPeople);
  } , [query]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleGrid
        people={people.results}
      />
    </div>
  );
}

/**************************************/
export default App;
