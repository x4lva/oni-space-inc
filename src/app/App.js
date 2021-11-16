import React, {useState} from 'react';
import ModalWrapper from '../components/Wrappers/ModalWrapper/ModalWrapper';
import SuggestionSection from '../components/SuggestionSection/SuggestionSection';
import './App.css';

const App = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <React.Fragment>
            <div className={"section-show"} onClick={() => setModalShow(true)}>
                <span>Open Suggestions</span>
            </div>
            <ModalWrapper fullscreen={true} show={modalShow}>
                <SuggestionSection onHide={() => setModalShow(false)}  />
            </ModalWrapper>
        </React.Fragment>
    );
};

export default App;