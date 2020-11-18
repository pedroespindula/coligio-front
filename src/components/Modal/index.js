import React from 'react';

import { ExternalModal, ModalContent } from './styles';

const Modal = (props) => {
    const { id = 'external-modal', onClose = () => {}, children } = props;

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <ExternalModal id="external-modal" onClick={handleOutsideClick}>
            <ModalContent>{children}</ModalContent>
        </ExternalModal>
    );
};

export default Modal;
