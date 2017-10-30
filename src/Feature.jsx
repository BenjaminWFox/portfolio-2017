import React from "react";

class Feature extends React.Component {

  fadeDetails = () => {
    console.log('Fade details for', this);
  }

  render() {

    let liveLink = "";
    
    if(this.props.link) {
      liveLink = <span>| <a href={this.props.link} target='_blank'>( view live )</a></span>;
    }

    return (
      <div className={"feature " + this.props.class}>
        <div className="feature-cover">
          <div className="feature-details">
            <h3 className="feature-title">{this.props.title}</h3>
            <p className="feature-caption">Story: {this.props.story}</p>
            <p className="feature-caption">Stack: {this.props.stack}</p>
            <p className="feature-caption"><button onClick={this.fadeDetails}>( view image )</button> {liveLink}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
