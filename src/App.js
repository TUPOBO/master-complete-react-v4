import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({
      animal: "dog"
    });
    promise.then(console.log, console.error);
  }

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
