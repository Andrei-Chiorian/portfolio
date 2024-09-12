import styled from "styled-components";

export const StylesLocation = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    .footer-location-data-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 25px;
        overflow-y: hidden;
    }

    .footer-location-group {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .footer-location-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .footer-location-data {
        display: flex;
        gap: 20px;
        align-items: center;
        background-color: transparent;
        border-radius: 6px;
    }

    .footer-location-icon {
        border-radius: 100px;
        height: 45px;
        width: 45px;
        background-color: ${(props) => props.theme.locationIconBg};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clipboard-button-footer {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: ${(props) => props.theme.text};
    }
    .clipboard-button-footer svg {
        color: ${(props) => props.theme.text};
    }

    @media (max-width: 688px) {
        .footer-location-data-container {
            margin-top: 0;
        }
        .footer-location-data {
            gap: 5px;
        }
        .mobile-position-location svg {
            position: absolute;
            left: 118px;
        }        
        & {
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 375px) {
        .footer-location-text {
            font-size: 16px;
        }
    }

    @media (max-width: 360px) {
        .footer-location-icon {
            height: 40px;
            width: 40px;
        }
    }
`;
