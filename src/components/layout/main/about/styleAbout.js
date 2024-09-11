import styled from "styled-components";

export const StylesAbout = styled.div`
    width: 100%;
    height: auto;
    clear: both;
    float: left;

    

    .about {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        padding-top: 112px;
        position: relative;
    }

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

    .wrapper {
        width: 100%;
        height: auto;
        clear: both;
        display: flex;
        align-items: center;
    }

    .left {
        width: 50%;
        padding-right: 60px;
    }

    .right {
        width: 50%;
        padding-left: 60px;
    }

    .left .image {
        position: relative;
    }

    .left .image img {
        max-height: 800px;
        max-width: 100%;
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    .numbers.year {
        top: 120px;
        left: -80px;
    }
    .numbers {
        position: absolute;
    }
    .numbers .wrapper {
        background-color: #4b4f5c;
        box-shadow: none;
    }
    .numbers .wrapper {
        display: flex;
        align-items: center;
        background-color: #1d1c4c;
        box-shadow: 25px 0 65px rgba(54, 32, 152, 0.11);
        border-radius: 8px;
        padding: 34px 40px 31px 36px;
        width: 100%;
        height: auto;
        clear: both;
    }
    .numbers .wrapper h3 {
        font-size: 60px !important;
        color: #1cbe59 !important;
    }
    .numbers .wrapper .name {
        font-size: 21px;
        color: ${({ theme }) => theme.text} !important;
        font-weight: 500;
        font-family: Jost, sans-serif;
        line-height: 1.3;
        padding-left: 17px;
    }
    .numbers.project {
        bottom: 70px;
        right: -30px;
    }
    .numbers {
        position: absolute;
    }
    .numbers.project h3 {
        color: #8575c9 !important;
    }
    .right .title {
        margin-bottom: 25px;
    }
    .right .title span {
        display: inline-block;
        color: #f75023;
        font-size: 24px;
        font-weight: 500;
        font-family: Jost, sans-serif;
        margin-bottom: 6px;
    }
    .right .title h3 {
        font-size: 48px;
        max-width: 90%;
        line-height: 1.25;        
    }
    .right .text {
        margin-bottom: 47px;
    }
    .right .text p {
        color: ${({ theme }) => theme.text} !important;
        line-height: 23px;
    }
    .button {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
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
    .about .brush_1 {
        position: absolute;
        top: 20px;
        left: 120px;
    }

    .about .brush_1 img {
        max-width: 100%;
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
    }
    .about .brush_2 {
        position: absolute;
        bottom: -50px;
        right: 0;
    }

    @media (max-width: 768px) {
        .about {
            padding-top: 50px;
        }
    }

    @media (max-width: 1040px) {
        .left {
            padding-right: 0;
            width: 100%;
            margin-bottom: 40px;
        }
        .right {
            width: 100%;
            padding: 0;
        }
        .container {
            padding: 0 20px;
        }
        .about .wrapper {
            flex-direction: column;
            text-align: center;
        }
        .about .left .image img {
            max-width: 300px;
            max-height: 300px;
        }
        .about .numbers.year {
            top: auto;
            left: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .about .numbers.project {
            bottom: auto;
            right: auto;
            margin-bottom: 30px;
        }
        .about .numbers {
            position: relative;
            text-align: center;
        }
        .about .numbers .wrapper h3 {
            font-size: 45px;
            text-align: center;
        }
        .about .numbers .wrapper span {
            padding-left: 0;
        }
        .about .right .title span {
            font-size: 20px;
        }
        .about .right .title h3 {
            font-size: 35px;
            max-width: 100%;
        }
        .about .brush_1 img {
            display: none;
        }
        .about .brush_2 {
            display: none;
        }
    }

    @media (max-width: 1600px) {
        .container {
            max-width: 1170px;
        }
        .numbers .wrapper {
            padding: 25px 30px 21px 26px;
        }
        .numbers .wrapper h3 {
            font-size: 50px !important;
        }
        .numbers .wrapper .name {
            font-size: 18px !important;
        }
        .right .title span {
            font-size: 22px;
        }
        .right .title h3 {
            font-size: 40px;
        }
        .button a {
            padding: 9px 35px 8px 35px;
        }
        .about .brush_1 {
            left: 40px;
        }
    }
`;
