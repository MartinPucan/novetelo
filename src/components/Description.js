import React from 'react';
import adamImage from '../adam1.jpg';

const Description = () => {
    return (
        <section className="container-description">
            <div className="square"></div>
            <div className="main-image">
                <img src={adamImage} alt="adam" loading="lazy" width="420"/>
            </div>
            <div className="line"></div>
        </section>
    )
}

export default Description;