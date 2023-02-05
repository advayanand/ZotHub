import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "../styles/Carousel.css"

const EventCarousel = (props) => {
  const [index, setIndex] = useState(0);
  var slides = props.slides;
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100 carousel-img"
            src={slide.imgurl}
            //src="holder.js/800x400?text=Second slide&bg=282c34"
            //src ="holder.js/800x400?text=First slide&bg=373940"
            alt={slide.caption}
          />
          <Carousel.Caption>
            <h3>{slide.eventName}</h3>
            <p>{slide.eventInfo}</p>
            <p>Location: {slide.location}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default EventCarousel;