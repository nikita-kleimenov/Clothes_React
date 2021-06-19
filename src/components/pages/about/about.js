import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import s from './about.module.css'

import shoes from '../../images/shoes.png'
import jacket from '../../images/Black-Leather-Jacket-PNG-Pic.png'
import shirt from '../../images/t-shirt.png'


const about = () => {
    return (
        <div className={s.wrapper}>
            <h2>We are a fast-growing online store of women's clothing. We monitor the quality of our goods so that you 
                get as much pleasure from your purchase as possible, and will undoubtedly come back to us again!Our 
                store was founded in 2015, and for 6 years we have been delighting you with fashionable clothes.
</h2>
            <h2 className={s.style}>Choose your style!</h2>
            <Carousel className={s.carusel}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shoes}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fashionable shoes</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shirt}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Comfortable t-shirts</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={jacket}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Jackets</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <h2 className={s.thanks}>Thank you for choose us!</h2>
        </div>
        
    )
}

export default about
