import styled from "styled-components";

export const StylesFooter = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.footerColor};
    margin-bottom: 0;
    padding: 15px;
    -webkit-box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
    box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
    z-index: 2;

    div,
    span {
        color: ${(props) => props.theme.footerText};
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        gap: 45px;
    }

    .title-container svg {
        display: none;
    }

    @media (max-width: 688px) {
        .footer-content {
            flex-direction: column;
            gap: 18px;
        }
        .footer-section-header {
            width: fit-content;
            margin: 0 auto;
        }
        .title-container {
            display: flex;
            gap: 10px;
            justify-content: center;
            position: relative;
        }

        .footer-section-arrow {
            transform: rotate(0deg);
            transition: transform 0.2s ease;
        }
        .footer-section-arrow-up {
            transform: rotate(-180deg);
            transition: transform 0.2s ease;
        }

        .title-container svg {
            display: inline;
        }

        .container-closed {
            transition: max-height 0.3s linear;
            max-height: 0px;
        }
        .container-expanded {
            transition: max-height 0.4s linear;
            max-height: 500px;
        }
    }
`;
