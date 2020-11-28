import styled from 'styled-components';

export const Tabs = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	width: 85%;
	margin-left: 5%;
	display: flex;
	padding: 5px 5px 0 5px;
`;

export const Tab = styled.h3`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	padding: 10px;
	color: #C0C0C0;
	margin: 0 30px;


	:hover {
		font-weight: 500;
		border-bottom: 5px solid #51AFB9;
		color: #383838;
	}
`;

export const ContentContainer = styled.div`
	width: 85%;
	margin-left: 5%;
  height: 100%;

	overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #c3c3c3;
      margin: 5px 0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #C3C3C3;
      border-radius: 10px;
      border: 4px solid var(--foreground-default);
    }

    &::-webkit-scrollbar-button {
      background: #FFF;
      border-style: solid;
      height: 14px;
      width: 14px;
			
			&:vertical:decrement {
        border-width: 0 7px 10px 7px;
        border-color: transparent;
        border-bottom-color: var(--primary-black);
      }
				&:vertical:increment {
        border-width: 10px 7px 0 7px;
        border-color: transparent;
        border-top-color: var(--foreground-tertiary);
      }
		}
`;

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: calc(100vh - 50px);

    background-color: #ffff;
`;

export const ContentPage = styled.div`
    display: flex; 
    flex-direction: column;
    width: 75%
`;


export const InputSearch = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    
    height: 50px;
    width: 40%;

    font-size: 14px;
    padding: 5px;

`;
