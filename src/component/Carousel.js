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
            //src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            //src ="holder.js/800x400?text=First slide&bg=373940"
            alt={slide.caption}
          />
          <Carousel.Caption>
            <h3 className='carousel-heading'>{slide.eventName}</h3>
            <p className='carousel-text'>{slide.eventInfo}</p>
            <p className='carousel-text'>Hosted by: {slide.clubName}</p>
            <p className='carousel-text'>Location: {slide.location}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default EventCarousel;