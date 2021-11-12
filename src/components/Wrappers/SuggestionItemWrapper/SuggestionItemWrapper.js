import React from 'react';
import SuggestionItem from '../../SuggestionItem/SuggestionItem';
import './SuggestionItemWrapper.css';

const SuggestionItemWrapper = (props) => {
    return (
        <div className="suggestion-item-container">
            <SuggestionItem {...props} />
            <div className="suggestion-item-action-container">
                <div className="suggestion-item-action" onClick={() => alert(props.name)}>
                    Add Item
                </div>
            </div>
        </div>
    );
};

export default SuggestionItemWrapper;