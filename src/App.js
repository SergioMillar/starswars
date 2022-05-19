import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes , Route} from "react-router-dom";

import Home from "./components/Home";
import { People } from "./components/People";
import { Planets } from "./components/Planets";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPeople() {
    let res = await fetch("https://swapi.tech/api/people");
    let data = await res.json();
    setPeople(data.results);
    setLoading(false);
  }
  async function fetchPlanets() {
    let res = await fetch("https://swapi.tech/api/planets");
    let data = await res.json();
    setPlanets(data.results);
    setLoading(false);
  }
  useEffect(() => {
    fetchPeople();
    fetchPlanets();
  }, []);

  useEffect(()=>{
    console.log(people,planets)
  },[people,planets])
  return (
    <>
   
      <Router>
       <Navbar/>
        <div>
          
            <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/People" element ={<People Data={people}/>}/>
              <Route path="/Planets" element ={<Planets Data={planets}/>}/>
            </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
