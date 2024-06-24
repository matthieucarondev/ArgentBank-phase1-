import React from 'react';
import chat from '../imgs/icon-chat.png';
import monney from '../imgs/icon-money.png';
import security from '../imgs/icon-security.png';

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
const Feature = ({feature}) => {
    return (
        <div className="feature-item">
      <img src={getImage(feature.icon)} alt={feature.alt} className="feature-icon" />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.description}</p>
        </div>
    );
};

export default Feature;