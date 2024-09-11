import styled from "styled-components";

export const StylesSkills = styled.div`
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

    .skills-main-title {
        width: 100%;
        max-width: 680px;
        height: auto;
        clear: both;
        text-align: center;
        margin: 0 auto;
    }

    .skills-main-title span {
        font-size: 24px;
        font-weight: 500;
        color: #f75023;
        font-family: Jost, sans-serif;
        display: inline-block;
        margin-bottom: 6px;
    }

    .skills-main-title h3 {
        font-size: 48px;
        line-height: 1.25;
        margin-bottom: 23px;
    }

    .skills-list {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        padding-top: 86px;
        margin-bottom: 200px;
    }

    .skills-list ul {
        margin: 0 0 0 -25px;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 3;
    }

    .skills-list ul li {
        margin: 0 0 25px 0;
        width: 50%;
        float: left;
        padding-left: 25px;
    }

    .skills-list ul li .list-inner {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: #35497a8f;
        box-shadow: 18px 0 87px rgba(10, 15, 70, 0.07);
        padding: 65px;
        transform-style: preserve-3d;
        transition: all 0.2s ease-out;
        perspective: 1000px;
        transform-origin: center bottom;
    }

    .skills-list .list-inner .icon {
        width: 95px;
        height: 95px;
        pointer-events: none;
    }

    .skills-list .list-inner .title-container {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 50px;
    }

    .skills-list .list-inner .icon svg {
        width: 95px;
        height: 95px;
        pointer-events: none;
    }

    .skills-list .title {
        width: 100%;
        pointer-events: none;
    }

    .skills-list .title h3 {
        font-size: 30px;
        color: ${({ theme }) => theme.text};
    }

    .skills-list .text {
        color: ${({ theme }) => theme.text};
        pointer-events: none;
        line-height: 1.4;
    }

    .brush_1 {
        position: absolute;
        top: 300px;
        left: 0;
    }

    .brush_2 {
        position: absolute;
        top: 0;
        right: 0;
    }

    .button {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        text-align: center;
    }
    
    .button a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        font-family: Jost, sans-serif;
        font-weight: 500;
        border-radius: 50px;
        border: 2px solid #f75023;
        padding: 14px 48px 13px 48px;
        position: relative;
        overflow: hidden;
    }
    .button a:before {
        position: absolute;
        content: "";
        z-index: 0;
        background-color: #f75023;
        left: -5px;
        right: -5px;
        bottom: -5px;
        height: 120%;
        transition: all 0.3s ease;
    }

    .button a:hover::before {
        height: 0%;
    }

    .button span {
        position: relative;
        z-index: 2;
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        .skills-list ul li .list_inner {
            padding: 20px;
        }
        .container {
            padding: 0 20px;
        }
    }

    @media (max-width: 1040px) {
        .skills-list ul {
            margin: 0;
        }

        .skills-list ul li {
            width: 100%;
            padding-left: 0;
        }

        .skills-list ul li .list-inner {
            padding: 40px;
        }

        .skills-list .list-inner .icon {
            width: 65px;
            height: 65px;
        }

        .skills-list .list-inner .icon svg {
            width: 65px;
            height: 65px;
        }

        .skills-list .list-inner .title-container {
            margin-bottom: 30px;
        }

        .brush_1 {
            display: none;
        }
        .brush_2 {
            display: none;
        }
    }

    @media (max-width: 1600px) {
        .container {
            max-width: 1170px;
        }

        .skills-main-title {
            max-width: 550px;
        }

        .skills-main-title span {
            font-size: 22px;
        }

        .skills-main-title h3 {
            font-size: 38px;
            margin-bottom: 16px;
        }

        .skills-list .title h3 {
            font-size: 25px;
            margin-bottom: 10px;
        }
    }
`;
