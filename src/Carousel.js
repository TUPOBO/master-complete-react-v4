import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  // 新的生命周期函数
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    console.log(photos);
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              src={photo.value}
              alt="animal thumbnail"
              key={photo.value}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
