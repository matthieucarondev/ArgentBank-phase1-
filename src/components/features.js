import React from 'react';
import featuresData from '../data/featuresData.json'; // Import the JSON data
import Feature from './feature';


const Features = () => {
    return (
        <section className="features">
        <h2 className="sr-only">Fonctionnalités</h2>
        {featuresData.map((feature, index) => (
          <Feature key={index} feature={feature}  />
        ))}
      </section>
    );
};

  
export default Features;