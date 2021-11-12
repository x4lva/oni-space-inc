import React from 'react';
import './SuggestionItem.css';

const SuggestionItem = ({name, description, img, price}) => {
    return (
        <div className="suggestion-item">
            <div className="suggestion-item-header" style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="suggestion-item-content">
                <div className="suggestion-item-content-name">
                    {name}
                </div>
                <div className="suggestion-item-content-description">
                    {description}
                </div>
                <div className="suggestion-item-content-price">
                    ${price}
                </div>
            </div>
        </div>
    );
};

export default SuggestionItem;