import React from 'react';
import AdamImage from '/img/adam_780.jpg';

const Description = () => {
    return (
        <section className="container-description">
            <div className="quote">
                <q>Until you start believing in yourself you ain't gonna have a life.</q>
            </div>
            <div className="main-image">
                <img src={AdamImage} alt="adam" loading="lazy" />
            </div>
        </section>
    )
}

export default Description;