import styled from "styled-components";

export const StylesTextAreaInput = styled.div`
    .form-input-input-own:-webkit-autofill,
    .form-input-input-own:-webkit-autofill:hover,
    .form-input-input-own:-webkit-autofill:focus,
    .form-input-input-own:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${(props) => props.theme.InputColor};
        transition: background-color 5000000000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px transparent;
    }

    .formInput-container {
        position: relative;
        width: 300px;
    }

    .form-input-input-own {
        width: 100%;
        height: 150px;
        padding: 8px 15px 18px 15px !important;
        border: 1px solid rgb(173, 173, 173);
        border-radius: 5px;
        outline: none;
        background-color: transparent !important;
        font-size: 17px;
        transition: border-color 0.3s;
        scrollbar-width: none;
        box-sizing: border-box; 
        resize: none;
         
    }

    .form-input-input-own::-webkit-scrollbar {
        display: none;
    }

    .form-input-input-own:focus {
        border: 2px solid ${(props) => props.theme.InputBorderFocus};
        -webkit-box-shadow: 0px 0px 4px 0px
            ${(props) => props.theme.InputBorderFocusShadow};
        -moz-box-shadow: 0px 0px 4px 0px
            ${(props) => props.theme.InputBorderFocusShadow};
        box-shadow: 0px 0px 4px 0px
            ${(props) => props.theme.InputBorderFocusShadow};
    }

    .form-input-label-own {
        position: absolute;
        top: 8px;
        left: 15px;
        background-color: rgb(90, 90, 90);
        border-radius: 5px;
        color: #8a8a8a;
        pointer-events: none;
        transition: transform 0.13s, color 0.1s, font-size 0.13s,
            padding 0.2s ease-in;
        padding-left: 5px;
        padding-right: 5px;
        letter-spacing: 0.5px;
    }

    .form-input-input-own:focus + .form-input-label-own {
        transform: translateX(-2px) translateY(-16px);
        font-size: 12px;
        color: rgba(240, 240, 240, 0.884);
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    .hasValue {
        transform: translateX(-2px) translateY(-16px);
        font-size: 12px;
        color: rgba(240, 240, 240, 0.884);
        font-weight: 500;
    }

    .match-input {
        border-color: rgb(0, 172, 0);
        -webkit-box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
        -moz-box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
        box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
    }

    .match-input:focus {
        border-color: rgb(0, 172, 0);
        -webkit-box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
        -moz-box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
        box-shadow: 0px 0px 3px 0px rgb(138, 250, 110);
    }

    .not-match-input {
        border-color: rgb(199, 1, 1);
        -webkit-box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
        -moz-box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
        box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
    }

    .not-match-input:focus {
        border-color: rgb(199, 1, 1);
        -webkit-box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
        -moz-box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
        box-shadow: 0px 0px 3px 0px rgb(250, 138, 110);
    }

    .match-label {
        color: rgb(0, 172, 0) !important;
    }

    .form-input-input-own:focus + .match-label {
        color: rgb(0, 172, 0) !important;
    }

    .not-match-label {
        color: rgb(199, 1, 1) !important;
    }

    .form-input-input-own:focus + .not-match-label {
        color: rgb(199, 1, 1) !important;
    }

    .input-eye {
        position: absolute;
        right: 8px;
        bottom: 5.5px;
        cursor: pointer;
    }

    .formInput-text-validation {
        display: flex;
        gap: 7px;
        align-items: center;
        font-size: 12px;
        font-weight: 300;
    }

    .formInput-text-validation-container {
        margin-left: 20px;
        animation: fadeIn 0.7s;
        transition: opacity 300ms;
    }

    .form-input-input-own::placeholder {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .form-input-input-own:focus::placeholder {
        opacity: 1 !important;
    }
/* 
    & .counter {
        position: absolute;
        bottom: 9px;
        right: 9px;
        width: 100%;
    } */
`;
