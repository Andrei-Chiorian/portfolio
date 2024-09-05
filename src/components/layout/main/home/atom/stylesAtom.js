import styled from "styled-components";

export const StylesAtom = styled.div`
    .atom svg {
        height: 50px;
        width: 50px;
    }

    .atom img {
        width: 450px;
    }

    .atom {
        position: relative;
        display: inline-block;
    }

    .orbit {
        z-index: 7;
        position: absolute;
        transform-style: preserve-3d;
        -webkit-animation: electronAnimation 6s infinite linear;
        -moz-animation: electronAnimation 6s infinite linear;
        -ms-animation: electronAnimation 6s infinite linear;
        -o-animation: electronAnimation 6s infinite linear;
        animation: electronAnimation 6s infinite ease-in-out;
        cursor: pointer;
    }

    .orbit:hover {
        -webkit-animation: spin 1s infinite linear;
        -moz-animation: spin 1s infinite linear;
        -ms-animation: spin 1s infinite linear;
        -o-animation: spin 1s infinite linear;
        animation: spin 1s infinite linear;
    }

    .react {
        top: 100px;
        left: 110px;
        -webkit-animation: electronAnimation 5s infinite ease-in-out reverse;
        -moz-animation: electronAnimation 5s infinite ease-in-out reverse;
        -ms-animation: electronAnimation 5s infinite ease-in-out reverse;
        -o-animation: electronAnimation 5s infinite ease-in-out reverse;
        animation: electronAnimation 5s infinite ease-in-out reverse;
    }

    .javascript {
        top: 410px;
        left: 400px;
    }

    .python {
        top: 100px;
        left: 400px;
    }

    .tensor {
        top: 400px;
        left: 140px;
    }

    .php {
        top: 220px;
        left: 360px;
        -webkit-animation: electronAnimation 5s infinite ease-in-out reverse;
        -moz-animation: electronAnimation 5s infinite ease-in-out reverse;
        -ms-animation: electronAnimation 5s infinite ease-in-out reverse;
        -o-animation: electronAnimation 5s infinite ease-in-out reverse;
        animation: electronAnimation 5s infinite ease-in-out reverse;
    }

    .laravel {
        top: 250px;
        left: 60px;
    }

    .flask {
        top: 400px;
        left: 30px;
        -webkit-animation: electronAnimation 5s infinite ease-in-out reverse;
        -moz-animation: electronAnimation 5s infinite ease-in-out reverse;
        -ms-animation: electronAnimation 5s infinite ease-in-out reverse;
        -o-animation: electronAnimation 5s infinite ease-in-out reverse;
        animation: electronAnimation 5s infinite ease-in-out reverse;
    }

    #nucleus {
        z-index: 4;
        position: relative;
        width: 100%;
        height: 100%;
    }

    #nucleus img {
        margin: auto;
        z-index: 4;
    }

    @-webkit-keyframes electronAnimation {
        0% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
        50% {
            transform: translateY(10px) translateX(-30px) rotateZ(140deg);
        }
        100% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
    }

    @-moz-keyframes electronAnimation {
        0% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
        50% {
            transform: translateY(10px) translateX(-30px) rotateZ(140deg);
        }
        100% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
    }

    @-ms-keyframes electronAnimation {
        0% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
        50% {
            transform: translateY(10px) translateX(-30px) rotateZ(140deg);
        }
        100% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
    }

    @-o-keyframes electronAnimation {
        0% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
        50% {
            transform: translateY(10px) translateX(-30px) rotateZ(140deg);
        }
        100% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
    }

    @keyframes electronAnimation {
        0% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
        50% {
            transform: translateY(10px) translateX(-30px) rotateZ(140deg);
        }
        100% {
            transform: translateY(-10px) translateX(30px) rotateZ(-140deg);
        }
    }

    @-webkit-keyframes spin {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @-moz-keyframes spin {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @-ms-keyframes spin {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @-o-keyframes spin {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @media (max-width: 688px) {
        .atom svg {
            height: 40px;
            width: 40px;
        }
    }

    @media (max-width: 1040px) {
        #nucleus img {
            height: 360px !important;
            width: 320px !important;
        }
        .atom .orbit {
            display: none;
        }
        .atom svg {
            height: 40px;
            width: 40px;
        }
    }

    @media (max-width: 1600px) {
        .atom img {
            width: 450px;
        }
    }
`;
