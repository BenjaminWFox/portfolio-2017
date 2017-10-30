import React from "react";
/*import Welcome from "./user-greeting.jsx";
import logo from "./logo.svg";*/
import Nav from "./Nav.jsx";
import FeatureGrid from "./FeatureGrid.jsx";
import FEATURESARRAY from "./data.json";
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