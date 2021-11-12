import React from 'react';
import './SuggestionItem.css';

const SuggestionItem = ({name, description, img, price}) => {
    return (
        <div className="suggestion-item">
            <div className="suggestion-item-header" style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="suggestion-item-content">
                <div className="suggestion-item-content-name">
                    <span>{name}</span>
                </div>
                <div className="suggestion-item-content-description">
                    <p>{description}</p>
                </div>
                <div className="suggestion-item-content-price">
                    <span>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default SuggestionItem;