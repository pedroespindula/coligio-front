import styled from 'styled-components';

export const ExternalModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    z-index: 4;

    background-color: rgba(0, 0, 0, 0.3);

    animation-name: modal-animation-in;
    animation-duration: 0.3s;
    transition-timing-function: ease-in;

    @keyframes modal-animation-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }
`;

export const ModalContent = styled.div`
    width: 500px;
    padding: 35px;

    border-radius: 12px;

    background-color: var(--background);
`;
