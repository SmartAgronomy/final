import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Home_Picture1 from "../Images/home_picture1.jpg"
import Home_Picture4 from "../Images/Home_Picture4.png"
import Home_Picture2 from "../Images/login-background.jpeg"
import "./styles/backgroundSlider.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="slide-wrapper">
    <Carousel  activeIndex={index} onSelect={handleSelect}>
  
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Home_Picture1}
          alt="First slide"
        />
      </Carousel.Item>
     
      <Carousel.Item class="itemList">
        <img
          className="d-block w-100"
          src={Home_Picture2}
          alt="Second slide"
        />

      </Carousel.Item>

      <Carousel.Item class="itemList">
        <img
          className="d-block w-100"
          src={Home_Picture4}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;