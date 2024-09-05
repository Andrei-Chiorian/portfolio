import styled from "styled-components";

export const StylesHeader = styled.div`
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        transition: all 0.3s ease;
        padding: 25px 0;
        width: 100%;
    }

    .header-scrolled {
        padding: 10px 0 !important;
        background-color: ${(props) => props.theme.headerBg};
        -webkit-box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
        -moz-box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
        box-shadow: 0px 1px 7px 0px rgba(255, 255, 255, 0.8);
    }

    .header-container {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        height: auto;
        padding: 0 40px;
        position: relative;
        clear: both;
    }

    .header-items {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1600px) {
        .header {
            padding: 15px 0;
        }
        .header-container {
            max-width: 1170px;
        }
    }

    @media (min-width: 689px) and (max-width: 1084px) {
        .header {
            padding: 15px 0;
        }
        .header-container {
            padding: 0 30px;
        }
    }
`;
