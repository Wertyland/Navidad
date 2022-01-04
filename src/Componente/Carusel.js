import React from "react";
import { Carousel } from "react-bootstrap";


const Carrusel = () => { 

    return (
        <Carousel>
  <Carousel.Item>
  <h3><strong>Profesionales</strong></h3>
    <img 
      className="w-90"
      src="./img/carrusel.jpg "
      alt="First slide"
    />
    <Carousel.Caption >
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <h3><strong>Inovacion</strong></h3>
    <img
      className="w-90"
      src="./img/carrusel2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <h3><strong>Metaverso</strong></h3>
    <img
      className="w-90"
      src="./img/carrusel3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carrusel;