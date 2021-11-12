import React, {useEffect, useState} from 'react';
import './SuggestionSection.css';
import SuggestionItemWrapper from '../Wrappers/SuggestionItemWrapper/SuggestionItemWrapper';
import ScrollContainer from 'react-indiana-drag-scroll';
import {BeatLoader} from "react-spinners";

const SuggestionSection = () => {
    const [suggestionItems, setSuggestionItems] = useState([]);
    const [suggestionItemsLoading, setSuggestionItemsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSuggestionItems([
                {
                    name: "Item Name",
                    img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                    description: "Description",
                    price: 213
                },
                {
                    name: "Item Name",
                    img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                    description: "Description",
                    price: 213
                },
                {
                    name: "Item Name",
                    img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                    description: "Description",
                    price: 213
                }
            ]);
            setSuggestionItemsLoading(false);
        }, 1500)
    }, []);

    return (
        <section className={"suggestions"}>
            <div className="container">
                <div className="suggestions-message">
                    <div className="suggestions-message-icon">
                        <img src="http://res.cloudinary.com/joyup/image/upload/v1618337516/pj1wugzi1au9kwgj4fdb.jpg"
                             alt="joyup robo head"/>
                    </div>
                    <div className="suggestions-message-content">
                        HI, Our Chef thinks you may like items based on <br/> your current selection
                    </div>
                </div>
                <ScrollContainer vertical={false}
                                 horizontal={true}
                                 stopPropagation={true} className="suggestions-items">

                    {suggestionItemsLoading ? (
                        <div className={"loading"}>
                            <BeatLoader color={"#A8272D"} loading={suggestionItemsLoading} size={20} />
                        </div>
                    ) : (
                        suggestionItems.map(el => {
                            return <SuggestionItemWrapper key={el.name} name={el.name} description={el.description}
                                                          price={el.price} img={el.img}/>
                        })
                    )}

                </ScrollContainer>
            </div>
        </section>
    );
};

export default SuggestionSection;