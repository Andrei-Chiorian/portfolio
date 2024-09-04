import styled, { keyframes } from "styled-components";

export const StylesMobileHeader = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 10;

    .mobile-header-inner {
        background-color: ${(props) => props.theme.headerBg};
        width: 100%;
        height: auto;
        float: left;
        clear: both;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 5px 20px 5px 20px;
    }

    .mobile-header-in {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mobile-header-trigger {
        line-height: 0;
    }
    .header-logo {
        margin-left: 10px;
    }

    .hamburger {
        font: inherit;
        display: inline-block;
        overflow: visible;
        margin: 0;
        padding: 15px;
        cursor: pointer;
        transition-timing-function: linear;
        transition-duration: 0.15s;
        transition-property: opacity, filter;
        text-transform: none;
        color: inherit;
        border: 0;
        background-color: transparent;
    }

    .hamburger.is-active:hover,
    .hamburger:hover {
        opacity: 1;
    }

    .hamburger-box {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 24px;
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 30px;
        height: 3px;
        background-color: ${(props) => props.theme.text};
        border-radius: 4px;
        position: absolute;
        transition-property: transform, opacity;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    .hamburger-inner {
        top: 50%;
        transform: translateY(-50%);
    }

    .hamburger-inner::before,
    .hamburger-inner::after {
        content: "";
        display: block;
    }

    .hamburger-inner::before {
        top: -10px;
    }

    .hamburger-inner::after {
        top: 10px;
    }

    .hamburger.is-active .hamburger-inner {
        background-color: transparent;
    }

    .hamburger.is-active .hamburger-inner::before {
        transform: rotate(45deg);
        top: 0;
    }

    .hamburger.is-active .hamburger-inner::after {
        transform: rotate(-45deg);
        top: 0;
    }

    @media (max-width: 1040px) {
        & {
            display: block;
        }
    }
`;
