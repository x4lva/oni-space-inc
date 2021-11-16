import React from 'react';

const ModalWrapper = (props) => {
    return (
        <div className={`modal`}>
            {props.show && props.children}
        </div>
    );
};

export default ModalWrapper;