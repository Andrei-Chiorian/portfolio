import styled from "styled-components";

export const StylesMainLoader = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(18, 16, 48);   
    overflow: hidden;
    z-index: 9999;
    

    .loader {
        --size: 1300px;
        --duration: 2s;
        --logo-color: #b83110;
        --background: linear-gradient(
            0deg,
            rgba(30, 27, 72, 0.5) 0%,
            rgba(30, 27, 72, 0.3) 50%
        );
        height: var(--size);
        aspect-ratio: 1;
        position: relative;
    }

    .loader .box {
        position: absolute;
        background: rgba(30, 27, 72, 0.3);
        background: var(--background);
        border-radius: 50%;
        border-top: 1px solid rgba(100, 100, 100, 1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
        backdrop-filter: blur(5px);
        animation: ripple var(--duration) ease-in-out;
    }

    .loader .box:nth-child(1) {
        inset: 40%;
        z-index: 99;
    }

    .loader .box:nth-child(2) {
        inset: 30%;
        z-index: 98;
        border-color: rgba(100, 100, 100, 0.5);
        animation-delay: 0.2s;
    }

    .loader .box:nth-child(3) {
        inset: 20%;
        z-index: 97;
        border-color: rgba(100, 100, 100, 0.3);
        animation-delay: 0.4s;
    }

    .loader .box:nth-child(4) {
        inset: 10%;
        z-index: 96;
        border-color: rgba(100, 100, 100, 0.2);
        animation-delay: 0.6s;
    }

    .loader .box:nth-child(5) {
        inset: 0%;
        z-index: 95;
        border-color: rgba(100, 100, 100, 0.1);
        animation-delay: 0.8s;
    }

    .loader .logo {
        position: absolute;
        inset: 0;
        display: grid;
        place-content: center;
        padding: 10%;
    }

    .loader .logo svg {
        fill: var(--logo-color);
        width: 100%;
        animation: color-change var(--duration) infinite ease-in-out;
    }

    @keyframes ripple {
        0% {
            transform: scale(1);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
        }
        50% {
            transform: scale(1.3);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
        }
        100% {
            transform: scale(1);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
        }
    }

    @keyframes color-change {
        0% {
            fill: var(--logo-color);
        }
        50% {
            fill: white;
        }
        100% {
            fill: var(--logo-color);
        }
    }

    @media (max-width: 768px) {
        .loader {
            --size: 800px;
        }
    }


    @media (min-width: 1600px) {
        .loader {
            --size: 1500px;
        }
    } 

   
`;
