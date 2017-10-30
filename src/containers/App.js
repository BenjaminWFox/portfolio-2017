import React from "react";
/*import Welcome from "./user-greeting.jsx";
import logo from "./logo.svg";*/
import Nav from "../components/Nav.jsx";
import FeatureGrid from "../components/FeatureGrid.jsx";
import FEATURESARRAY from "../data/data.json";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <FeatureGrid features={FEATURESARRAY.array} />
      </div>
    );
  }
}

export default App;