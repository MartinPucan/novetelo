import React from 'react';
import burgerIco from '../burger-ico.jpeg';

const FoodCarousel = () => {
    return (
      <section className="carousel-container">
          <div className="carousel-title">
              Food Ideas
          </div>
          <div className="carousel-items">
              <div className="carousel-item">
                  <div className="carousel-item-top">
                      <img src={burgerIco} width="200" alt="food" />
                  </div>
                  <div className="carousel-item-bottom">Hamburger</div>
              </div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
          </div>
      </section>
    );
}

export default FoodCarousel;