import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

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
            className="d-block w-100"
            src="{slide.image}"
            //src ="holder.js/800x400?text=First slide&bg=373940"
            alt={slide.caption}
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default EventCarousel;