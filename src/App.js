import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {Switch} from "react-router-dom"
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import { People } from "./components/People";
import { Planets } from "./components/Planets";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.co/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.co/api/planets/?format=json");
      let data = res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
  }, []);
  return (
    <>
      <Router>
       <Navbar/>
        <div>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Router exact path="/">
                <Home />
              </Router>
              <Router exact path="/People">
             <People data={people}/>
              </Router>
              <Router exact path="/planets">
              <Planets data={planets} />
              </Router>
            </Switch>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
