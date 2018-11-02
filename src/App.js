import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Adopt Me!</h1>
        <Pet name="luna" animal="Dog" breed="Havanese" />
        <Pet name="luna" animal="Dog" breed="Havanese" />
        <Pet name="luna" animal="Dog" breed="Havanese" />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
