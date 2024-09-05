import styled from "styled-components";

export const StylesProjects = styled.div`
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding-top: 185px;
    margin-bottom: 165px;
    position: relative;

    .container {
        max-width: 1400px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        padding: 0 40px;
        position: relative;
        clear: both;
    }

    .brush_1 {
        position: absolute;
        top: 150px;
        left: 100px;
    }

    .brush_2 {
        position: absolute;
        bottom: -120px;
        right: 60px;
    }

    .main-title {
        text-align: center;
        margin: 0 auto;
    }

    .main-title span {
        font-size: 24px;
        font-weight: 500;
        color: #f75023;
        font-family: Jost, sans-serif;
        display: inline-block;
        margin-bottom: 6px;
    }

    .main-title h3 {
        color: ${({ theme }) => theme.text} !important;
        font-size: 48px;
        line-height: 1.25;
        margin-bottom: 23px;
    }

    .main-title p {
        color: ${({ theme }) => theme.text} !important;
    }

    .filter {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        text-align: center;
        padding: 78px 0 56px 0;
    }

    .filter ul {
        margin: 0;
        list-style-type: none;
    }

    .filter ul li {
        margin: 0 50px 0 0;
        display: inline-block;
    }

    .filter ul li a {
        text-decoration: none;
        color: ${({ theme }) => theme.text} !important;
        line-height: 25px;
    }

    .filter ul li a:hover {
        color: #f75023 !important;
    }

    .filter ul li .current {
        color: #f75023 !important;
    }

    .projects-titles {
        white-space: nowrap;
        background: #fff;
        font-size: 21px;
        padding: 7px 15px;
        font-family: Jost, sans-serif;
        font-weight: 500;
        color: #000;
        position: fixed;
        z-index: 5;
        opacity: 0;
        visibility: hidden;
    }

    .project-list {
        margin-top: 30px;
        width: 100%;
        height: auto;
        text-align: center;
        padding: 78px 0 56px 0;
    }

    .fade-projects {
        width: 100%;
    }

    .grid-container {
        display: grid;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 15px 15px;
        grid-auto-flow: row;
        grid-template-areas:
            "g1 g2 g3"
            "g1 g5 g3"
            "g4 g5 g6";
        transition: all 2s ease;
    }

    .g2:hover,
    .g4:hover,
    .g6:hover {
        transform: scaleY(1.4); 
    }

    .g2:hover ~ .g5,
    .g4:hover ~ .g1,
    .g6:hover ~ .g3 {
        height: 300px;
    }

    .g1,
    .g2,
    .g3,
    .g4,
    .g5,
    .g6 {
        transition: all 0.5s ease;
    }
    .g4 {
        grid-area: g4;
    }

    .g1 {
        grid-area: g1;
    }

    .g2 {
        grid-area: g2;
    }

    .g3 {
        grid-area: g3;
    }

    .g5 {
        grid-area: g5;
    }

    .g6 {
        grid-area: g6;
    }

    .projects-list figure {
        position: relative;
        min-height: 250px;
        height: 100%;
        max-height: 600px;
        cursor: pointer;
        width: 300px;
        overflow: hidden;
        border-radius: 25px;
        box-shadow: 0px 5px 15px whitesmoke;
    }

    .projects-list figure img {
        width: 100%;
        height: 100%;
        transition: all 400ms ease-out;
        will-change: transform;
    }
    .projects-list figure .capa {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 103, 123, 0.7);
        transition: all 400ms ease-out;
        opacity: 0;
        visibility: hidden;
        text-align: center;
    }

    .projects-list figure:hover > .capa {
        opacity: 1;
        visibility: visible;
    }
    .projects-list figure:hover > .capa h3 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .projects-list figure:hover > img {
        transform: scale(1.3);
    }

    .projects-list figure .capa h3 {
        color: #fff;
        font-weight: 400;
        font-size: larger;
        margin-bottom: 120px;
        transition: all 400ms ease-out;
        margin-top: 30px;
    }
    .projects-list figure .capa p {
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        width: 100%;
        max-width: 220px;
        margin: auto;
    }

    @media (max-width: 688px) {
        .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
        }
    }

    @media (max-width: 1600px) {
        .container {
            max-width: 1170px;
        }
        .brush_1 {
            left: 50px;
        }
        .brush_2 {
            right: 10px;
        }
        .main-title span {
            font-size: 22px;
        }
        .main-title h3 {
            font-size: 38px;
            margin-bottom: 16px;
        }
    }
`;
