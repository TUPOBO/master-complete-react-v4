import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
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
