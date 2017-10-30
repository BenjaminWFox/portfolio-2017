import React from "react";
import Feature from "./Feature";
import "./Feature.css";

class FeatureGrid extends React.Component {

  buildGrid() {
    return <Feature />;
  }

  render() {
    const features = [];
    let i = 0;
    this.props.features.forEach(function(feature) {
      features.push(
        <Feature
          key={++i}
          class={feature.class}
          title={feature.title}
          story={feature.story}
          stack={feature.stack}
          link={feature.liveUrl} />
      )
    });

    return (
      <section className="feature-container">
        { features }
      </section>
    );
  }
}

export default FeatureGrid;
