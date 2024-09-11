import styled from "styled-components";

export const StylesTestimonials = styled.div`
    position: relative;

    .testi-main-title {
        width: 100%;
        height: auto;
        clear: both;
        text-align: center;
        margin: 0 auto;
    }

    .list_wrapper {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        position: relative;
    }

    .testi-main-title span {
        font-size: 24px;
        font-weight: 500;
        color: #f75023;
        font-family: Jost, sans-serif;
        display: inline-block;
        margin-bottom: 6px;
    }

    .testi-main-title h3 {
        font-size: 48px;
        line-height: 1.25;
        margin-bottom: 23px;
        color: ${({ theme }) => theme.text};
    }

    .testi-main-title p {
        color: ${({ theme }) => theme.text};
    }

    .list-wrapper {
        margin-top: 80px !important;
    }

    .list-wrapper .total {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        position: relative;
        margin-bottom: 200px;
    }

    .list-wrapper .total .in {
        width: 100%;
        max-width: 1300px;
        text-align: center;
        margin: 0 auto;
    }

    .swiper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        padding: 0 20px;
    }

    .in .icon {
        margin-bottom: 35px;
        text-align: center;
    }

    .svg {
        width: 65px;
        height: 65px;
        color: #f75023;
        fill: currentcolor;
    }

    .in .text {
        margin-bottom: 51px;
    }

    .in .text p {
        font-size: 25px;
        font-style: italic;
        line-height: 1.6;
        color: ${({ theme }) => theme.text};
    }

    .in .short {
        margin-bottom: 90px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .in .short .image {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }

    .in .short .image .main {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        border-radius: 8px;
    }

    .in .detail {
        text-align: left;
        padding-left: 25px;
    }

    .in .detail h3 {
        font-size: 24px;
        color: ${({ theme }) => theme.text};
        margin-bottom: 10px;
    }

    .in .detail span {
        font-size: 17px;
        color: ${({ theme }) => theme.text};
    }

    .swiper-pagination-bullet {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #f75023;
        position: relative;
        margin: 0 12px !important;
        border-radius: 50%;
        cursor: pointer;
    }

    .swiper-pagination-bullet:before {
        position: absolute;
        content: "";
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border-radius: 100%;
        border: 2px solid #ffb324;
        transition: all 0.5s ease;
    }

    & .brush_1 {
        position: absolute;
        top: -120px;
        right: 20px;
    }

    & .brush_1 img {
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
        max-width: 100%;
    }

    & .brush_2 {
        position: absolute;
        bottom: -850px;
        left: 0px;        
    }

    & .brush_2 img {
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
        max-width: 100%;
    }

    .total .left-details {
        position: absolute;
        top: 50%;
        left: 45px;
        transform: translateY(-50%);
        margin-top: -10px;
    }

    .total .left-details .det-image {
        position: absolute;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        visibility: visible;
    }

    .total .left-details .det-image.one {
        width: 55px;
        height: 55px;
    }

    .total .left-details .det-image.two {
        width: 70px;
        height: 70px;
        top: -217px;
        left: 133px;
    }

    .total .left-details .det-image.three {
        width: 60px;
        height: 60px;
        top: -60px;
        left: 255px;
        cursor: pointer;
    }

    .total .left-details .det-image.four {
        width: 35px;
        height: 35px;
        left: 260px;
        bottom: -153px;
        cursor: pointer;
    }

    .total .left-details .square {
        position: absolute;
        width: 18px;
        height: 18px;
        display: inline-block;
        border-radius: 6px;
    }

    .total .left-details .square.green {
        background-color: #1cbe59;
        top: -108px;
        left: 55px;
    }

    .total .left-details .square.yellow {
        background-color: #f0c45c;
        left: 148px;
        bottom: -42px;
    }

    .total .left-details .border {
        border: 4px solid #6e50f0;
        width: 30px;
        height: 30px;
        top: -152px;
        left: 300px;
    }

    .total .right-details {
        position: absolute;
        top: 50%;
        right: 85px;
        transform: translateY(-50%);
        margin-top: -50px;
    }

    .total .right-details .det-image {
        position: absolute;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }

    .total .right-details .det-image.one {
        width: 49px;
        height: 49px;
    }

    .total .right-details .det-image.two {
        width: 79px;
        height: 79px;
        bottom: -100px;
        right: 225px;
        cursor: pointer;
    }

    .total .right-details .det-image.three {
        width: 58px;
        height: 58px;
        top: -162px;
        right: 50px;
        cursor: pointer;
    }

    .total .right-details .square {
        position: absolute;
        width: 21px;
        height: 21px;
        display: inline-block;
        border-radius: 6px;
    }

    .total .right-details .square.yellow {
        background-color: #f0c45c;
        top: -173px;
        right: 263px;
    }

    .total .right-details .square.purple {
        background-color: #8067f0;
        bottom: -180px;
        right: 38px;
    }

    .total .right-details .border {
        border: 6px solid #1cbe59;
        width: 54px;
        height: 54px;
        right: 109px;
        top: -13px;
    }

    @media (max-width: 1080px) {
        .swiper {
            padding: 0 20px;
        }

        .total .right-details {
            display: none;
        }

        .total .left-details {
            display: none;
        }

        .testi-main-title {
            padding: 0 20px;
        }

        .in .text p {
            font-size: 20px;
        }
    }

    @media (max-width: 1600px) {
        .testi-main-title {
            max-width: 550px;
        }

        .testi-main-title span {
            font-size: 22px;
        }

        .testi-main-title h3 {
            font-size: 38px;
            margin-bottom: 16px;
        }

        .in .text p {
            font-size: 19px;
        }

        .list-wrapper .total .in {
            max-width: 800px;
        }

        .in .detail h3 {
            font-size: 22px;
        }

        .in .short .image {
            width: 70px;
            height: 70px;
        }

        .total .left-details .det-image.two {
            left: 120px;
        }

        .total .left-details .det-image.three {
            left: 200px;
        }

        .total .left-details .border {
            left: 240px;
        }

        .total .right-details .det-image.two {
            right: 170px;
        }

        .total .right-details .square.yellow {
            right: 210px;
            width: 55px;
            height: 55px;
        }

        .total .right-details .square {
            right: 68px;
        }
    }
`;
