import React from 'react';
import burgerIco from '../burger-ico.jpeg';

const FoodCarousel = () => {
    const foods = [
        { id: 1, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 2, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 3, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 4, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 5, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 6, name: "Hamburger", description: "Tasty burger", image: burgerIco },
        { id: 7, name: "Hamburger", description: "Tasty burger", image: burgerIco },
    ];

    return (
      <section className="carousel-container">
          <div className="carousel-title">
              Food Ideas
          </div>
          <div className="carousel-wrapper">
              {foods.map( food => (
                  <div className="carousel-item">
                      <div className="carousel-item-top">
                          <img src={food.image} width="200" alt="food" />
                      </div>
                      <div className="carousel-item-bottom">
                          <div>{food.name}</div>
                          <div>{food.description}</div>
                      </div>
                  </div>
              ))}
          </div>
      </section>
    );
}

export default FoodCarousel;