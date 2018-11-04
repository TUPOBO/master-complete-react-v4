import React, { Component } from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
// petfinder 客户端
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class Details extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        let pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }

  render() {
    const { name, animal, breed, location, description } = this.state;
    if (this.state.loading) {
      return <h1>loading</h1>;
    }
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
