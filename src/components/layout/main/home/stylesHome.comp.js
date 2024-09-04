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
        margin-top: 10%;
        position: relative;
        display: inline-block;
    }

    .orbit,
    .electron,
    .orbitTrain,
    .electronTrain {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    #nucleus {
        z-index: 4;
        position: relative;
        width: 100%;
        height: 100%;
    }

    #nucleus img {
        height: 400px;
        width: 340px;
        margin-left: auto;
        margin-right: auto;
        z-index: 4;
    }

    .orbit {
        z-index: 2;
        width: 400px;
        height: 400px;
        border: 0;
        transform-style: preserve-3d;
        -webkit-animation: z-orbit 2s infinite linear;
        -moz-animation: z-orbit 2s infinite linear;
        -ms-animation: z-orbit 2s infinite linear;
        -o-animation: z-orbit 2s infinite linear;
        animation: z-orbit 2s infinite linear;
    }

    .orbit .electron {
        position: relative;
        top: 140px;
        width: 50px;
        height: 50px;
        transform: translateX(80px);
        -webkit-animation: electronAnimation 2s infinite linear;
        -moz-animation: electronAnimation 2s infinite linear;
        -ms-animation: electronAnimation 2s infinite linear;
        -o-animation: electronAnimation 2s infinite linear;
        animation: electronAnimation 2s infinite linear;
    }

    .orbit:nth-child(4) {
        transform: rotateY(65deg) rotateX(5deg);

        animation-delay: -1s;
    }

    .orbit:nth-child(4) .electron {
        animation-delay: -1s;
    }

    .orbit:nth-child(2) {
        transform: rotateY(50deg) rotateX(-20deg);
        animation-delay: -1s;
        animation-duration: 1s;        
    }

    .orbit:nth-child(2) .electron {
        animation-duration: 1s;
    }

    .orbit:nth-child(3) {
        transform: rotateY(65deg) rotateX(54deg);
        animation-delay: -2s;
    }

    .orbit:nth-child(5) {
        transform: rotateY(85deg) rotateX(30deg);
    }

    .orbit:nth-child(6) {
        transform: rotateY(-290deg) rotateX(-5deg);
        animation-delay: -2s;
    }

    .orbit:nth-child(7) {
        transform: rotateY(220deg) rotateX(20deg);
    }
    

    @-webkit-keyframes electronAnimation {
        0% {
            transform: rotateZ(0deg) translateX(480px) rotateZ(0deg)
                rotateY(-65deg);
        }

        100% {
            transform: rotateZ(360deg) translateX(180px) rotateZ(-360deg)
                rotateY(-65deg);
        }
    }

    @-moz-keyframes electronAnimation {
        0% {
            transform: rotateZ(0deg) translateX(180px) rotateZ(0deg)
                rotateY(-65deg);
        }

        100% {
            transform: rotateZ(360deg) translateX(180px) rotateZ(-360deg)
                rotateY(-65deg);
        }
    }

    @-ms-keyframes electronAnimation {
        0% {
            transform: rotateZ(0deg) translateX(180px) rotateZ(0deg)
                rotateY(-65deg);
        }

        100% {
            transform: rotateZ(360deg) translateX(180px) rotateZ(-360deg)
                rotateY(-65deg);
        }
    }

    @-o-keyframes electronAnimation {
        0% {
            transform: rotateZ(0deg) translateX(180px) rotateZ(0deg)
                rotateY(-65deg);
        }

        100% {
            transform: rotateZ(360deg) translateX(180px) rotateZ(-360deg)
                rotateY(-65deg);
        }
    }

    @keyframes electronAnimation {
        0% {
            transform: rotateZ(0deg) translateX(150px) rotateZ(0deg)
                rotateY(-65deg);
        }

        100% {
            transform: rotateZ(360deg) translateX(180px) rotateZ(-360deg)
                rotateY(-65deg);
        }
    }

    @-webkit-keyframes z-orbit {
        0% {
            z-index: 2;
        }
        50% {
            z-index: 6;
        }
        100% {
            z-index: 2;
        }
    }

    @-moz-keyframes z-orbit {
        0% {
            z-index: 2;
        }
        50% {
            z-index: 6;
        }
        100% {
            z-index: 2;
        }
    }

    @-ms-keyframes z-orbit {
        0% {
            z-index: 2;
        }
        50% {
            z-index: 6;
        }
        100% {
            z-index: 2;
        }
    }

    @-o-keyframes z-orbit {
        0% {
            z-index: 2;
        }
        50% {
            z-index: 6;
        }
        100% {
            z-index: 2;
        }
    }

    @keyframes z-orbit {
        0% {
            z-index: 2;
        }
        50% {
            z-index: 6;
        }
        100% {
            z-index: 2;
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
        /* .atom .orbit{
            display: none;
        } */
        .atom svg {
            height: 40px;
            width: 40px;
        }
        #nucleus img {
            height: 260px;
            width: 220px;
        }
        .name h3 {
            font-size: 45px !important;       
        }
    }

    @media (max-width: 1040px) {
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
            max-height: 400px;
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
