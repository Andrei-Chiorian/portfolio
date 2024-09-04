import styled from "styled-components";

export const ModalStyles = styled.div`
    padding: 10px;
    width: fit-content;
    max-height: 99%;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 12px;
    box-shadow: ${props => props.theme.shadowsMenu};
    position: fixed;
    overflow-y: auto;
    scroll-behavior: smooth;
    scrollbar-color: ${(props) => props.theme.scrollBarColor};
    scrollbar-width: thin;
    
    .modal__body {
        height: 100%;
        clear: both;
        display: flex;
        justify-content: center;
        align-items: center;     
       
    }

    .cross__close {
        color: ${props => props.theme.text};
        float: right;
        cursor: pointer;
    }
`;