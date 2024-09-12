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
        z-index: 2;
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

    .filter ul li div {
        text-decoration: none;        
        line-height: 25px;
        cursor: pointer;
    }

    .filter ul li div:hover {
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
        text-align: center;
        padding: 78px 0 56px 0;       
    }

    .fade-projects {
        width: 100%;
    }

    .flex-container {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 30px;       
    }

    .figure-not-visible {
        display: none !important;
    }

    .c1,
    .c2,
    .c3 {
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 100%;
    }

    .projects-list figure {
        max-height: 60%;
        position: relative;
        cursor: pointer;
        width: 300px;
        overflow: hidden;
        border-radius: 25px;
        box-shadow: 0px 0px 5px 2px whitesmoke;
        display: grid;
        background-color: white !important;
    }

    .projects-list figure img {
        width: 100%;
        margin: auto;
        transition: all 400ms ease-out;
        will-change: transform;
        overflow: hidden;
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

    @media (min-width: 1040px) {
        .flex-container {
            height: 800px;
        }
        .c1 figure:nth-of-type(1),
        .c3 figure:nth-of-type(1) {
            transition: all 0.3s ease;
            min-height: 60%;
        }

        .c1 figure:nth-of-type(2),
        .c3 figure:nth-of-type(2) {
            flex: 1;
            transition: all 0.3s ease;
        }

        .c2 figure:nth-of-type(1) {
            flex: 1;
            transition: all 0.3s ease;
        }

        .c2 figure:nth-of-type(2) {
            transition: all 0.3s ease;
            min-height: 60%;
        }

        .hover-effect {
            min-height: 35% !important;
        }
    }

    @media (max-width: 1040px) {
        .c1-1,
        .c1-2,
        .c2-1,
        .c2-2,
        .c3-1,
        .c3-2 {
            height: 300px;
        }
        .flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
