import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <React.Fragment>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="luna" animal="Dog" breed="Havanese" />
        <Pet name="luna" animal="Dog" breed="Havanese" />
        <Pet name="luna" animal="Dog" breed="Havanese" />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
