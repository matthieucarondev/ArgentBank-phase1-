import React from 'react';
import featuresData from '../data/featuresData.json'; // Import the JSON data
import chat from '../imgs/icon-chat.png';
import monney from '../imgs/icon-money.png';
import security from '../imgs/icon-security.png';

const Features = () => {
    return (
        <section className="features">
        <h2 className="sr-only">Fonctionnalités</h2>
        {featuresData.map((feature, index) => (
          <div className="feature-item" key={index}>
            {/* Dynamically render the icon based on the data */}
            <img src={getImage(feature.icon)} alt={feature.alt} className="feature-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    );
};
// Helper function to get the image path based on the icon name
function getImage(iconName) {
    switch (iconName) {
      case 'chat':
        return chat;
      case 'money':
        return monney;
      case 'security':
        return security;
      default:
        return '';
    }
  }
  
export default Features;