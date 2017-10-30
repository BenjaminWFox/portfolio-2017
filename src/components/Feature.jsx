import React from "react";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      extraClasses: "",
    };
    this.fadeDetails = this.fadeDetails.bind(this);
  }

  /* Works because 'this' is bound in constructor */
  fadeDetails() {
    if(this.state.visible) {
      this.setState({
        extraClasses: "hidden-cover",
        visible: false,
      });
    }
  }

  /* Works because 'this' is bound in element handler definition */
  showDetailsArrowBound() {
    if(!this.state.visible) {
      this.setState({
        extraClasses: "",
        visible: true,
      });
    }
  }

  /* This feature [public class fields syntax] is not part of ES2015(ES6) and perhaps not part of ES2016(ES7) also. */
  showDetailsPCFS = () => {
    if(!this.state.visible) {
      this.setState({
        extraClasses: "",
        visible: true,
      });
    }
  }

  render() {

    let liveLink = "";
    
    if(this.props.link) {
      liveLink = <span>| <a href={this.props.link} target='_blank'>( view live )</a></span>;
    }

    return (
      <div className={"feature " + this.props.class} onClick={this.showDetailsPCFS} onMouseLeave={(e) => this.showDetailsArrowBound(e)}>
        <div className={"feature-cover " + this.state.extraClasses}>
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
