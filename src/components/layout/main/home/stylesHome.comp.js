import styled from "styled-components";

export const StylesHomeComp = styled.div`
    width: 100%;
    height: 100vh;
    clear: both;
    float: left;
    position: relative;
    margin-bottom: 190px;

    .background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/img/home-back.png");
        background-position: 70%;
    }

    .background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0)
        );
        backdrop-filter: blur(1px) brightness(0.9);
        z-index: 1;
    }

    .go-down {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 60px;
        z-index: 5;
    }

    #wheel {
        animation: wheelMove 2s ease-in-out infinite;
    }

    .home-info-container {
        max-width: 1400px;
        width: 100vw;
        height: 100%;
        padding: 0 40px;
        position: relative;
        clear: both;
        z-index: 5;
        margin: 0 auto;
    }

    .home-info-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .details {
        width: 50%;
        padding-right: 20px;
    }

    .hello h3 {
        font-size: 45px;
    }

    .name {
        margin-bottom: 18px;
    }

    .name h3 {
        font-size: 85px;
        color: ${({ theme }) => theme.text};
    }

    .job {
        margin-bottom: 35px;
    }

    .job span {
        font-size: 18px !important;
    }

    .job p {
        color: ${({ theme }) => theme.text} !important;
        font-size: 17px !important;
        color: #000;
        font-weight: 500;
    }

    .text {
        margin-bottom: 42px;
    }

    .text p {
        color: ${({ theme }) => theme.text} !important;
        font-size: 17px !important;
        letter-spacing: 0.7px;
    }

    .avatar {
        width: fit-content;
        height: fit-content;
    }

    .atom svg {
        height: 50px;
        width: 50px;
    }

    .atom {
        position: relative;
        display: inline-block;
    }

    .orbit {
        z-index: 7;
        position: absolute;
        transform-style: preserve-3d;
        -webkit-animation: electronAnimation 3s infinite linear;
        -moz-animation: electronAnimation 3s infinite linear;
        -ms-animation: electronAnimation 3s infinite linear;
        -o-animation: electronAnimation 3s infinite linear;
        animation: electronAnimation 3s infinite ease-in-out;
        cursor: pointer;
    }

    .orbit:hover {
        -webkit-animation: spin 0.5s infinite linear;
        -moz-animation:  spin 0.5s infinite linear;
        -ms-animation:  spin 0.5s infinite linear;
        -o-animation:  spin 0.5s infinite linear;
        animation: spin 0.5s infinite linear;
    }

    .react {
        top: 100px;
        left: 110px;
        -webkit-animation: electronAnimation 2s infinite  ease-in-out reverse;
        -moz-animation: electronAnimation 2s infinite  ease-in-out reverse;
        -ms-animation: electronAnimation 2s infinite  ease-in-out reverse;
        -o-animation: electronAnimation 2s infinite  ease-in-out reverse;
        animation: electronAnimation 2s infinite  ease-in-out reverse;
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
        -webkit-animation: electronAnimation 2s infinite ease-in-out reverse;
        -moz-animation: electronAnimation 2s infinite ease-in-out reverse;
        -ms-animation: electronAnimation 2s infinite ease-in-out reverse;
        -o-animation: electronAnimation 2s infinite ease-in-out reverse;
        animation: electronAnimation 2s infinite ease-in-out reverse;
    }

    .laravel {
        top: 250px;
        left: 60px;
    }

    .flask {
        top: 400px;
        left: 30px;
        -webkit-animation: electronAnimation 1.5s infinite ease-in-out reverse;
        -moz-animation: electronAnimation 1.5s infinite ease-in-out reverse;
        -ms-animation: electronAnimation 1.5s infinite ease-in-out reverse;
        -o-animation: electronAnimation 1.5s infinite ease-in-out reverse;
        animation: electronAnimation 1.5s infinite ease-in-out reverse;
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

    @keyframes wheelMove {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(40px);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes anim_moveBottom {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(20px);
        }
    }

    @media (max-width: 688px) {        
        .atom svg {
            height: 40px;
            width: 40px;
        }
        
        .name h3 {
            font-size: 45px !important;
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
        .home-info-container {
            padding: 0 20px;
        }

        .home-info-content {
            flex-direction: column-reverse;
            justify-content: center;
        }
        .details {
            width: 100%;
            padding-right: 0;
            text-align: center;
        }
        .atom svg {
            height: 40px;
            width: 40px;
        }
        #nucleus img {
            height: 260px;
            width: 220px;
        }
    }

    

    @media (max-width: 1600px) {
        .home-info-container {
            max-width: 1170px;
        }
        .avatar img {
            transform: scale(0.8);
        }
        .hello h3 {
            font-size: 25px;
        }
        .name {
            margin-bottom: 13px;
        }
        .name h3 {
            font-size: 60px;
        }
        .job {
            margin-bottom: 23px;
        }
        .job p {
            font-size: 19px;
        }
        .text {
            margin-bottom: 30px;
        }
    }
`;
