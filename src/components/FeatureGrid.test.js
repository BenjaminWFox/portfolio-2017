import React from "react";
import ReactDOM from "react-dom";
import FeatureGrid from "./FeatureGrid";
import FEATURESARRAY from "../data/data.json";

it("should have data before rendering", () => {
  expect(FEATURESARRAY).toHaveProperty("array");
  expect(FEATURESARRAY.array.length).toBe(12);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureGrid features={FEATURESARRAY.array} />, div);
});
