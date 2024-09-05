import styled from "styled-components";

export const StylesMenu = styled.div`
    & ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    & ul li:last-child {
        margin-right: 0 !important;
    }

    & ul li {
        margin: 0 48px 0 0;
        display: inline-block;
    }

    & ul li a {
        text-decoration: none;
        font-size: 17px;
        font-weight: 500;
        color: ${(props) => props.theme.text} !important;
    }

    & ul li a.active-section {
        color: #f75023 !important;
    }

    .download-cv {
        position: relative;
        top: 3px;
    }
    .download-cv a {
        text-decoration: none;
        transition: all 0.3s ease;
        border: 2px solid #f75023;
        border-radius: 50px;
        padding: 8px 35px 7px 35px;
        position: relative;
        overflow: hidden;
        display: inline-block;
    }
    .download-cv a span {
        position: relative;
        z-index: 2;
        font-size: 18px;
        color: ${(props) => props.theme.text};
    }
    .download-cv a::before {
        position: absolute;
        content: "";
        background-color: #f75023;
        left: -5px;
        right: -5px;
        bottom: -5px;
        height: 0;
        transition: all 0.3s ease;
    }
    .download-cv a:hover::before {
        height: 100%;
        bottom: 0;
        z-index: 0 !important;
    }

    @media (min-width: 689px) and (max-width: 1084px) {
        .download-cv a span {
            font-size: 15px;
        }
        & ul li a {            
            font-size: 15px;
            font-weight: 400 !important;            
        }
    }

    @media (max-width: 1600px) {
        & ul li {
            margin-right: 30px;
        }
    }
`;
