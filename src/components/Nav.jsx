import React from "react";
import "./Nav.css";

/* -> Rewrote nave for example of destructured, implicit return functional component
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">Ben Fox</div>
      </nav>
    );
  }
}
*/

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="navbar-brand">Ben Fox</div>
  </nav>
);

export default Nav;